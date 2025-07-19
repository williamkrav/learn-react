import React, { useRef, useState, FormEvent } from 'react';
import Card from '../../components/ui/Card';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function FormValidation() {
  // Using refs for form inputs
  const formRef = useRef<HTMLFormElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  // State for form errors
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Validation rules
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Username validation
    if (!usernameRef.current?.value) {
      newErrors.username = 'Username is required';
    } else if (usernameRef.current.value.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRef.current?.value) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(emailRef.current.value)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRef.current?.value) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(passwordRef.current.value)) {
      newErrors.password =
        'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number';
    }

    // Confirm password validation
    if (!confirmPasswordRef.current?.value) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (confirmPasswordRef.current.value !== passwordRef.current?.value) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  // Form submission handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccessMessage(false);

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Show success message
        setShowSuccessMessage(true);

        // Reset form
        formRef.current?.reset();
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }

    setIsSubmitting(false);
  };

  // Real-time field validation
  const validateField = (field: keyof FormData) => {
    const formErrors = validateForm();
    setErrors((prev) => ({
      ...prev,
      [field]: formErrors[field],
    }));
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Form Validation with useRef</h1>
        <p className="text-gray-400">
          Learn how to implement form validation using React useRef hook and best practices.
        </p>
      </header>

      {/* Form Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Registration Form Example</h2>
        <Card className="bg-gray-800 border-gray-700">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Username field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                ref={usernameRef}
                type="text"
                id="username"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                onBlur={() => validateField('username')}
              />
              {errors.username && <p className="mt-1 text-sm text-red-400">{errors.username}</p>}
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                onBlur={() => validateField('email')}
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                onBlur={() => validateField('password')}
              />
              {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
            </div>

            {/* Confirm Password field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                ref={confirmPasswordRef}
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                onBlur={() => validateField('confirmPassword')}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-4 py-2 rounded text-white transition-colors ${
                isSubmitting ? 'bg-blue-700 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit'
              )}
            </button>

            {/* Success message */}
            {showSuccessMessage && (
              <div className="mt-4 p-4 bg-green-800 text-green-100 rounded">
                Form submitted successfully!
              </div>
            )}
          </form>
        </Card>
      </section>

      {/* Best Practices Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Why useRef for Forms?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Avoid unnecessary re-renders from input changes</li>
                <li>Direct access to DOM elements and their values</li>
                <li>Better performance for large forms</li>
                <li>Easier form reset functionality</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Validation Best Practices</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Validate on blur for better user experience</li>
                <li>Show validation errors clearly under each field</li>
                <li>Disable submit button during submission</li>
                <li>Clear validation errors on successful submission</li>
                <li>Use strong typing with TypeScript</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Error Handling</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Clear error messages for each validation rule</li>
                <li>Handle API errors gracefully</li>
                <li>Show loading states during submission</li>
                <li>Provide success feedback</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default FormValidation;
