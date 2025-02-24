import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./Form.css"

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        <StepOne nextStep={() => setCurrentStep(1)} />,
        <StepTwo prevStep={() => setCurrentStep(0)} />
    ];

    return <div className="form">{steps[currentStep]}</div>;
}

const StepOne = ({ nextStep }) => {
    return (
        <Formik
            initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                phone_number: ""
            }}
            onSubmit={nextStep}
        >
            {() => (
                <Form>
                    <h1>LogIn</h1>
                    <p>First Name</p>
                    <Field name="first_name" className="input" />

                    <p>Last Name</p>
                    <Field name="last_name" className="input"/>

                    <p>Email</p>
                    <Field name="email" className="input" />

                    <p>Phone Number</p>
                    <Field name="phone_number" className="input" />

                    <button type="submit">Next</button>
                </Form>
            )}
        </Formik>
    );
};

const StepTwo = ({ prevStep }) => {
    return (
        <Formik
            initialValues={{
                leetCodeHandle: "",
                codeForceHandle: "",
                GitHubHandle: ""
            }}
            onSubmit={() => alert("Form Submitted")}
        >
            {() => (
                <Form>
                    <p>Leetcode Handle</p>
                    <Field name="leetCodeHandle" className="input"/>

                    <p>Codeforces Handle</p>
                    <Field name="codeForceHandle" className="input"/>

                    <p>GitHub Handle</p>
                    <Field name="GitHubHandle" className="input"/>

                    <button type="submit">Submit</button>
                    <button type="button" onClick={prevStep}>Prev</button>
                </Form>
            )}
        </Formik>
    );
};
