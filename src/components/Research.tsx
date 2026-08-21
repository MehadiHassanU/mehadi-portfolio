"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";
import { ThinRule } from "./ThinRule";

export function Research() {
  const experiments = [
    {
      number: "01",
      title: "Diamond Price Prediction",
      subtitle: "Machine learning experiment exploring relationships between diamond characteristics and price.",
      steps: [
        { label: "01", title: "PROBLEM", desc: "Understand how diamond characteristics (carat, cut, color, clarity) influence market price." },
        { label: "02", title: "DATA", desc: "Kaggle Diamonds dataset — 53,940 records with 10 attributes including price." },
        { label: "03", title: "ANALYSIS", desc: "EDA revealing non-linear relationships, categorical feature distributions, and outlier patterns." },
        { label: "04", title: "MODELING", desc: "Gradient boosting regressors (XGBoost, LightGBM) with cross-validation and hyperparameter tuning." },
        { label: "05", title: "EVALUATION", desc: "RMSE and MAE metrics on holdout test set; feature importance analysis." },
        { label: "06", title: "RESULT", desc: "Model achieves strong predictive performance; carat emerges as dominant feature." },
      ],
    },
  ];

  return (
    <section id="research" className="py-20 lg:py-32" aria-labelledby="research-heading">
      <div className="editorial-grid">
        <SectionLabel number="03" label="RESEARCH & EXPERIMENTS" className="col-span-12 lg:col-span-2" />

        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3 mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DisplayHeading lines={["THINGS I'M", "EXPLORING."]} size="lg" stagger={0.1} className="mb-6" />
          <p className="font-body text-body-lg text-slate leading-relaxed max-w-xl mb-16">
            A growing collection of experiments, technical explorations, and data-driven projects.
          </p>
        </motion.div>

        <motion.div
          className="col-span-12 lg:col-span-10 lg:col-start-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {experiments.map((exp, expIndex) => (
            <div key={exp.number} className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="font-display text-display-md font-medium text-charcoal/30 shrink-0">{exp.number}</span>
                <div>
                  <h3 className="font-display text-section font-medium text-charcoal mb-2">{exp.title}</h3>
                  <p className="font-body text-body text-slate leading-relaxed">{exp.subtitle}</p>
                </div>
              </div>

              <div className="pl-16 lg:pl-20 space-y-6 border-l border-border ml-8 lg:ml-0">
                {exp.steps.map((step, stepIndex) => (
                  <motion.div
                    key={step.label}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: stepIndex * 0.06 }}
                  >
                    <div className="absolute left-[-1.5rem] top-[0.5rem] w-3 h-3 rounded-full bg-accent" aria-hidden="true" />
                    <div className="font-body text-meta text-slate uppercase tracking-widest mb-1">{step.label} — {step.title}</div>
                    <p className="font-body text-body-sm text-slate">{step.desc}</p>
                  </motion.div>
                ))}
              </div>

              {expIndex < experiments.length - 1 && <ThinRule className="mt-16" />}
            </div>
          ))}

          {/* Future entries placeholder */}
          <motion.div
            className="mt-20 space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-display text-section font-medium text-charcoal mb-8">POTENTIAL FUTURE ENTRIES</h4>
            <div className="space-y-6 pl-8 lg:pl-12 border-l border-border">
              {[
                {
                  title: "AI Agent Experiments",
                  desc: "Exploring agentic systems, tool use, and autonomous workflows.",
                },
                {
                  title: "Data Analytics Experiments",
                  desc: "Exploring datasets and finding meaningful patterns.",
                },
                {
                  title: "Automation Experiments",
                  desc: "Exploring how software and AI can reduce repetitive workflows.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="absolute left-[-1.5rem] top-[0.5rem] w-3 h-3 rounded-full border border-border bg-transparent" aria-hidden="true" />
                  <h5 className="font-body text-body font-medium text-charcoal">{item.title}</h5>
                  <p className="font-body text-body-sm text-slate mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}