"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

// Custom SVG Icons
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ExclamationCircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
    />
  </svg>
);

const ArrowPathIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
      clipRule="evenodd"
    />
  </svg>
);

const EnvelopeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// TypeScript interfaces
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  company: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FormState {
  data: ContactFormData;
  errors: FormErrors;
  touched: { [key: string]: boolean };
  isSubmitting: boolean;
  isSubmitted: boolean;
  submitStatus: "idle" | "submitting" | "success" | "error";
  submitMessage: string;
}

// Validation rule interface
interface ValidationRule {
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message: string;
}

// Validation rules
const validationRules: Record<string, ValidationRule> = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    message: "Name must be 2-50 characters, letters only",
  },
  email: {
    required: true,
    maxLength: 100,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 100,
    message: "Subject must be 5-100 characters",
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    message: "Message must be 10-1000 characters",
  },
  company: {
    required: false,
    maxLength: 100,
    message: "Company name must be less than 100 characters",
  },
  phone: {
    required: false,
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: "Please enter a valid phone number",
  },
};

// Floating Label Field Component
interface FloatingLabelFieldProps {
  id: string;
  type: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  error?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
  className?: string;
}

const FloatingLabelField: React.FC<FloatingLabelFieldProps> = ({
  id,
  type,
  value,
  onChange,
  onBlur,
  label,
  error,
  required = false,
  rows,
  maxLength,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const isTextarea = type === "textarea";

  const baseInputClasses = `
    w-full px-4 pt-6 pb-2 bg-[#11224d]/80 border-2 rounded-lg
    text-blue-100 transition-all duration-300 resize-none
    focus:outline-none focus:ring-2 focus:ring-cyan-400/20
    ${
      error
        ? "border-red-500 focus:border-red-400"
        : "border-cyan-700/30 focus:border-cyan-400 hover:border-cyan-600/50"
    }
    ${className}
  `;

  const labelClasses = `
    absolute left-4 transition-all duration-300 pointer-events-none
    ${
      isFocused || hasValue
        ? "top-2 text-xs text-cyan-300"
        : "top-4 text-base text-cyan-400/70"
    }
  `;

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(false);
    onBlur(e);
  };

  return (
    <div className="relative mb-6">
      {isTextarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={baseInputClasses}
          rows={rows || 4}
          maxLength={maxLength}
          placeholder=" "
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={error ? "true" : "false"}
          aria-required={required}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={baseInputClasses}
          maxLength={maxLength}
          placeholder=" "
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={error ? "true" : "false"}
          aria-required={required}
        />
      )}

      <label htmlFor={id} className={labelClasses}>
        {label} {required && <span className="text-red-400">*</span>}
      </label>

      {/* Character counter for message field */}
      {id === "message" && maxLength && (
        <div
          className={`
          absolute bottom-2 right-2 text-xs
          ${
            maxLength - value.length < 100
              ? "text-amber-400"
              : "text-cyan-400/70"
          }
        `}
        >
          {maxLength - value.length} characters remaining
        </div>
      )}

      {/* Error message */}
      {error && (
        <div
          id={`${id}-error`}
          role="alert"
          aria-live="polite"
          className="mt-2 text-red-400 text-sm flex items-center animate-in slide-in-from-top-1 duration-200"
        >
          <ExclamationCircleIcon className="w-4 h-4 mr-1 flex-shrink-0" />
          {error}
        </div>
      )}
    </div>
  );
};

// Submit Button Component
interface SubmitButtonProps {
  isSubmitting: boolean;
  isSubmitted: boolean;
  submitStatus: string;
  disabled: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  submitStatus,
  disabled,
}) => {
  const getButtonContent = () => {
    if (isSubmitting) {
      return (
        <div className="flex items-center justify-center">
          <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />
          Sending Message...
        </div>
      );
    }

    if (submitStatus === "success") {
      return (
        <div className="flex items-center justify-center">
          <CheckIcon className="w-5 h-5 mr-2" />
          Message Sent!
        </div>
      );
    }

    return "Send Message";
  };

  const getButtonClasses = () => {
    const baseClasses = `
      w-full py-3 px-6 rounded-lg font-semibold text-white
      transition-all duration-300 transform
      focus:outline-none focus:ring-2 focus:ring-cyan-400/20
      min-h-[48px]
    `;

    if (disabled || isSubmitting) {
      return `${baseClasses} bg-cyan-600/50 cursor-not-allowed`;
    }

    if (submitStatus === "success") {
      return `${baseClasses} bg-emerald-600 hover:bg-emerald-500`;
    }

    return `${baseClasses} bg-cyan-600 hover:bg-cyan-500 hover:scale-105 active:scale-98`;
  };

  return (
    <button
      type="submit"
      disabled={disabled || isSubmitting}
      className={getButtonClasses()}
    >
      {getButtonContent()}
    </button>
  );
};

// Status Message Component
interface StatusMessageProps {
  status: "success" | "error";
  message: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status, message }) => {
  if (status === "success") {
    return (
      <div className="p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg animate-in slide-in-from-top-2 duration-300">
        <div className="flex items-center text-emerald-400">
          <CheckCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
          <span className="font-semibold">Message sent successfully!</span>
        </div>
        <p className="text-emerald-300 text-sm mt-1">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg animate-in slide-in-from-top-2 duration-300">
      <div className="flex items-center text-red-400">
        <ExclamationCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
        <span className="font-semibold">Failed to send message</span>
      </div>
      <p className="text-red-300 text-sm mt-1">
        {message || "Please try again or contact us directly."}
      </p>
    </div>
  );
};

// Contact Info Component
const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "info@cyberdemo.com",
      href: "mailto:info@cyberdemo.com",
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPinIcon,
      label: "Address",
      value: "123 Security Street, Cyber City, CC 12345",
      href: null,
    },
  ];

  const socialLinks = [
    { name: "Twitter", href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", href: "#", color: "hover:text-blue-600" },
    { name: "GitHub", href: "#", color: "hover:text-gray-400" },
    { name: "Discord", href: "#", color: "hover:text-indigo-400" },
  ];

  return (
    <div className="bg-[#11224d]/60 backdrop-blur-sm rounded-xl p-6 border border-cyan-700/20 h-fit">
      <h3 className="text-xl font-semibold text-cyan-300 mb-6">Get in Touch</h3>

      {/* Contact Details */}
      <div className="space-y-4 mb-8">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start space-x-3">
            <detail.icon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-cyan-300 text-sm font-medium">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-blue-200 hover:text-cyan-300 transition-colors duration-200"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-blue-200">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mb-8">
        <h4 className="text-cyan-300 font-medium mb-3 flex items-center">
          <span className="mr-2">🔗</span>
          Follow Us
        </h4>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-blue-200 ${link.color} transition-colors duration-200 text-sm`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Response Time */}
      <div className="flex items-start space-x-3 p-3 bg-cyan-900/10 rounded-lg border border-cyan-700/20">
        <ClockIcon className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-cyan-300 text-sm font-medium">Response Time</p>
          <p className="text-blue-200 text-sm">Usually within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

// Main ContactSection Component
export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState<FormState>({
    data: {
      name: "",
      email: "",
      subject: "",
      company: "",
      phone: "",
      message: "",
    },
    errors: {},
    touched: {},
    isSubmitting: false,
    isSubmitted: false,
    submitStatus: "idle",
    submitMessage: "",
  });

  // Validation function
  const validateField = (name: string, value: string): string => {
    const rule = validationRules[name];
    if (!rule) return "";

    if (rule.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (value && rule.minLength && value.length < rule.minLength) {
      return rule.message;
    }

    if (value && rule.maxLength && value.length > rule.maxLength) {
      return rule.message;
    }

    if (value && rule.pattern && !rule.pattern.test(value)) {
      return rule.message;
    }

    return "";
  };

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
      errors: { ...prev.errors, [name]: "" }, // Clear error on change
      submitStatus: prev.submitStatus === "error" ? "idle" : prev.submitStatus,
    }));
  };

  // Handle input blur (validation)
  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setFormState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [name]: true },
      errors: { ...prev.errors, [name]: error },
    }));
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    Object.keys(formState.data).forEach((key) => {
      const error = validateField(
        key,
        formState.data[key as keyof ContactFormData]
      );
      if (error) {
        errors[key] = error;
        isValid = false;
      }
    });

    setFormState((prev) => ({
      ...prev,
      errors,
      touched: Object.keys(formState.data).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      ),
    }));

    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = formRef.current?.querySelector(
        '[aria-invalid="true"]'
      ) as HTMLElement;
      firstErrorField?.focus();
      return;
    }

    setFormState((prev) => ({
      ...prev,
      isSubmitting: true,
      submitStatus: "submitting",
    }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.2; // 80% success rate

      if (isSuccess) {
        setFormState((prev) => ({
          ...prev,
          isSubmitting: false,
          isSubmitted: true,
          submitStatus: "success",
          submitMessage: "Message sent successfully!",
        }));

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormState({
            data: {
              name: "",
              email: "",
              subject: "",
              company: "",
              phone: "",
              message: "",
            },
            errors: {},
            touched: {},
            isSubmitting: false,
            isSubmitted: false,
            submitStatus: "idle",
            submitMessage: "",
          });
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        submitStatus: "error",
        submitMessage: "Failed to send message. Please try again.",
      }));
    }
  };

  // Check if form has errors
  const hasErrors = Object.values(formState.errors).some(
    (error) => error !== ""
  );
  const isFormValid =
    Object.keys(validationRules).every((key) => {
      const rule = validationRules[key];
      const value = formState.data[key as keyof ContactFormData];
      return !rule.required || (rule.required && value.trim() !== "");
    }) && !hasErrors;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] p-4 sm:p-6 lg:p-8">
      {/* Back to Home Button */}
      <div className="mb-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-700 text-white font-semibold shadow-lg hover:bg-cyan-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#11224d]/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-cyan-700/20 shadow-2xl relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-80 h-80 bg-blue-700/20 rounded-full blur-3xl top-[-4rem] left-[-4rem]" />
                <div className="absolute w-60 h-60 bg-cyan-400/10 rounded-full blur-2xl bottom-[-3rem] right-[-3rem]" />
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-cyan-300 mb-2">
                    Contact & Support
                  </h1>
                  <p className="text-blue-200 text-lg">
                    Get in touch with our cybersecurity experts
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  role="form"
                  aria-labelledby="contact-form-title"
                  className="space-y-6"
                >
                  <h2 id="contact-form-title" className="sr-only">
                    Contact Form
                  </h2>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FloatingLabelField
                      id="name"
                      type="text"
                      value={formState.data.name}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      label="Full Name"
                      error={
                        formState.touched.name ? formState.errors.name : ""
                      }
                      required
                      maxLength={50}
                    />

                    <FloatingLabelField
                      id="email"
                      type="email"
                      value={formState.data.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      label="Email Address"
                      error={
                        formState.touched.email ? formState.errors.email : ""
                      }
                      required
                      maxLength={100}
                    />
                  </div>

                  <FloatingLabelField
                    id="subject"
                    type="text"
                    value={formState.data.subject}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    label="Subject"
                    error={
                      formState.touched.subject ? formState.errors.subject : ""
                    }
                    required
                    maxLength={100}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FloatingLabelField
                      id="company"
                      type="text"
                      value={formState.data.company}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      label="Company (Optional)"
                      error={
                        formState.touched.company
                          ? formState.errors.company
                          : ""
                      }
                      maxLength={100}
                    />

                    <FloatingLabelField
                      id="phone"
                      type="tel"
                      value={formState.data.phone}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      label="Phone (Optional)"
                      error={
                        formState.touched.phone ? formState.errors.phone : ""
                      }
                    />
                  </div>

                  <FloatingLabelField
                    id="message"
                    type="textarea"
                    value={formState.data.message}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    label="Message"
                    error={
                      formState.touched.message ? formState.errors.message : ""
                    }
                    required
                    rows={4}
                    maxLength={1000}
                  />

                  {/* Submit Button */}
                  <SubmitButton
                    isSubmitting={formState.isSubmitting}
                    isSubmitted={formState.isSubmitted}
                    submitStatus={formState.submitStatus}
                    disabled={!isFormValid}
                  />

                  {/* Status Messages */}
                  {formState.submitStatus === "success" && (
                    <StatusMessage
                      status="success"
                      message={formState.submitMessage}
                    />
                  )}

                  {formState.submitStatus === "error" && (
                    <StatusMessage
                      status="error"
                      message={formState.submitMessage}
                    />
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
