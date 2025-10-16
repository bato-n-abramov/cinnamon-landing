"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CustomSelect from "@/components/ui/custom-select/CustomSelect";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./RequestDemoV2.module.scss";

const specialties = [
    "Gastroenterology", "Dermatology", "Cardiology", "Rheumatology",
];
const ehrs = [
    "Epic", "Cerner", "Athenahealth", "Allscripts", "Other",
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.2, ease: "linear" },
    }),
};


const Schema = Yup.object({
    firstName: Yup.string().matches(/^[^\d]*$/, "First name cannot contain numbers").required("Full name is required"),
    lastName: Yup.string().matches(/^[^\d]*$/, "Last name cannot contain numbers").required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().min(8, "Too short").required("Phone is required"),
    org: Yup.string().required("Organisation is required"),
    title: Yup.string().required("Title is required"),
    specialty: Yup.string().required("This field is required"),
    ehr: Yup.string().required("This field is required"),
});

export default function RequestDemoV2() {
    const [submitting, setSubmitting] = useState(false);


    const submit = async (values, { resetForm }) => {
        try {
            setSubmitting(true);
            const res = await fetch("/api/forms", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    form: "request-demo",
                    payload: values,
                }),
            });
            if (!res.ok) throw new Error("Request failed", res);
            resetForm();
        } catch (e) {
            console.error(e);
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            id="request-demo" className={styles.section}>
            <div className={`${styles.inner} container`}>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <div className={styles.tag}>How To Start</div>
                        <motion.h2 variants={fadeUp} custom={0} className={styles.title}>Bring Efficiency <br /> to Every Patient Journey</motion.h2>
                        <motion.div variants={fadeUp} custom={1} className={styles.text}>
                            Be part of the network of clinics and health systems nationwide transforming
                            how patients start and stay on therapy with Cinnamon today.
                        </motion.div>
                        <div className={styles.image}>
                            <Image src={"/request-demoV2.png"} width={200} height={200} alt="Image" />
                        </div>
                    </div>

                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            org: "",
                            title: "",
                            specialty: "",
                            ehr: "",
                        }}
                        validationSchema={Schema}
                        onSubmit={submit}

                    >
                        {({ values, submitForm, setFieldValue, touched, errors }) => (
                            <motion.div className={`${styles.formWrapper}`} variants={fadeUp} custom={3}>
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
                                            <label htmlFor="email">Work email*</label>
                                            <Field name="email">
                                                {({ field, form }) => (
                                                    <input
                                                        {...field}
                                                        type="email"
                                                        id="email"
                                                        placeholder="Enter your work email"
                                                        className={`${form.values.email ? "filled" : ""}`}
                                                    />
                                                )}
                                            </Field>
                                            <ErrorMessage name="email" component="span" className={styles.err} />
                                        </div>

                                        <div className="col">
                                            <label htmlFor="phone">Phone number*</label>
                                            <PhoneInput
                                                id="phone"
                                                name="phone"
                                                defaultCountry="US"
                                                international
                                                value={values.phone}
                                                onChange={(v) => setFieldValue("phone", v || "")}
                                                className={`${values.phone ? "filled" : ""}`}
                                            />
                                            <ErrorMessage name="phone" component="span" className={styles.err} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="org">Organization / Health System Name*</label>
                                            <Field name="org">
                                                {({ field, form }) => (
                                                    <input
                                                        {...field}
                                                        id="org"
                                                        type="text"
                                                        placeholder="Enter your organization"
                                                        className={`${form.values.org ? "filled" : ""}`}
                                                    />
                                                )}
                                            </Field>
                                            <ErrorMessage name="org" component="span" className={styles.err} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="title">Job title / Role*</label>
                                            <Field name="title">
                                                {({ field, form }) => (
                                                    <input
                                                        {...field}
                                                        id="title"
                                                        type="text"
                                                        placeholder="Enter your job title"
                                                        className={`${form.values.title ? "filled" : ""}`}
                                                    />
                                                )}
                                            </Field>
                                            <ErrorMessage name="title" component="span" className={styles.err} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label>Specialty Area*</label>
                                            <CustomSelect
                                                name="specialty"
                                                options={specialties.map((s) => ({ label: s, value: s }))}
                                                value={values.specialty}
                                                onChange={(val) => setFieldValue("specialty", val)}
                                                placeholder="Choose your specialty"
                                                error={touched.specialty && errors.specialty}
                                            />
                                            <ErrorMessage name="specialty" component="span" className={styles.err} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label>EHR Used*</label>
                                            <CustomSelect
                                                name="ehr"
                                                options={ehrs.map((e) => ({ label: e, value: e }))}
                                                value={values.ehr}
                                                onChange={(val) => setFieldValue("ehr", val)}
                                                placeholder="Choose your EHR Used"
                                                error={touched.ehr && errors.ehr}
                                            />
                                            <ErrorMessage name="ehr" component="span" className={styles.err} />
                                        </div>
                                    </div>

                                    <div
                                        role="button"
                                        disabled={submitting}
                                        tabIndex={0}
                                        onClick={submitForm}
                                        onKeyDown={(e) => { if (e.key === "Enter") submitForm(); }}
                                        className={`${styles.buttonSubmit} button-icon`}
                                    >
                                        <span className="button-icon-text">{submitting ? "Sending..." : "Request Demo"}</span>
                                        <span className="button-icon-arrow">
                                            <svg className="arrow-hidden" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" /></svg>
                                            <svg className="arrow-move" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" /> </svg>
                                        </span>
                                    </div>
                                    <div className={styles.formText}>See how Cinnamon transforms patient access from start to finish.</div>
                                </Form>
                            </motion.div>
                        )}
                    </Formik>
                </div>
            </div>
        </motion.section>
    );
}
