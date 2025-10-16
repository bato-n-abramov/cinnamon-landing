"use client";

import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ThankYou from "../thank-you/ThankYou";
import * as Yup from "yup";
import styles from "./SignUpForm.module.scss";

const Schema = Yup.object({
    firstName: Yup.string().matches(/^[^\d]*$/, "First name cannot contain numbers").required("First name is required"),
    lastName: Yup.string().matches(/^[^\d]*$/, "First name cannot contain numbers").required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.string().required("Role is required"),
    department: Yup.string().required("Department is required"),
    org: Yup.string().required("Organisation is required"),
});

export default function SignUpForm({ onSuccess, cls }) {
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState(null);


    const submit = async (values, { resetForm }) => {
        try {
            setSubmitting(true);
            const res = await fetch("/api/forms", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ form: "sign-up", payload: values }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data?.error || "Request failed");
            setStatus("ok");
            resetForm();
            onSuccess?.();
        } catch (e) {
            console.error(e);
            setStatus("error");
        } finally {
            setSubmitting(false);
        }
    };

    if (status === "ok") return <ThankYou />;

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                role: "",
                department: "",
                org: "",
            }}
            validationSchema={Schema}
            onSubmit={submit}
        >
            {({ values, submitForm, }) => (
                <Form className={`${styles.formCard} form`}>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="firstName">First name*</label>
                            <Field name="firstName">
                                {({ field, form }) => (
                                    <input
                                        {...field}
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter your first name"
                                        className={`${form.values.firstName ? "filled" : ""}`}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="firstName" component="span" className={styles.err} />
                        </div>
                        <div className="col">
                            <label htmlFor="lastName">Last name*</label>
                            <Field name="lastName">
                                {({ field, form }) => (
                                    <input
                                        {...field}
                                        id="lastName"
                                        type="text"
                                        placeholder="Enter your last name"
                                        className={`${form.values.lastName ? "filled" : ""}`}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="lastName" component="span" className={styles.err} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="email">Email*</label>
                            <Field name="email">
                                {({ field, form }) => (
                                    <input
                                        {...field}
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`${form.values.email ? "filled" : ""}`}
                                        autoComplete="email"
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="email" component="span" className={styles.err} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="role">Role*</label>
                            <Field name="role">
                                {({ field, form }) => (
                                    <input
                                        {...field}
                                        id="role"
                                        type="text"
                                        placeholder="Enter your role"
                                        className={`${form.values.role ? "filled" : ""}`}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="role" component="span" className={styles.err} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="department">Department*</label>
                            <Field name="department">
                                {({ field, form }) => (
                                    <input
                                        {...field}
                                        id="department"
                                        type="text"
                                        placeholder="Enter your department"
                                        className={`${form.values.department ? "filled" : ""}`}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="department" component="span" className={styles.err} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="org">Organization*</label>
                            <Field name="org">
                                {({ field, form }) => (
                                    <input
                                        {...field}
                                        id="org"
                                        type="text"
                                        placeholder="Enter the name of your organization"
                                        className={`${form.values.org ? "filled" : ""}`}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="org" component="span" className={styles.err} />
                        </div>
                    </div>

                    <div
                        role="button"
                        disabled={submitting}
                        tabIndex={0}
                        onClick={submitForm}
                        onKeyDown={(e) => { if (e.key === "Enter") submitForm(); }}
                        className={`${styles.buttonSubmit} ${cls} button-icon`}
                    >
                        <span className="button-icon-text">{submitting ? "Sending..." : "Sign Up"}</span>
                        <span className="button-icon-arrow">
                            <svg className="arrow-hidden" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" /></svg>
                            <svg className="arrow-move" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" /> </svg>
                        </span>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
