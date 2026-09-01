"use client";

import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { DisplayHeading } from "./DisplayHeading";

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
    <section id="research" className="section" aria-labelledby="research-heading">
      <div className="editorial-grid">
        {/* Row 1: label (cols 1–3) + heading (cols 4–12) */}
        <SectionLabel
          number="03"
          label="RESEARCH"
          className="col-span-12 lg:col-span-3"
        />

        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <DisplayHeading lines={["THINGS I'M", "EXPLORING."]} size="lg" stagger={0.1} className="mb-6" />
          <p className="font-body text-body-lg text-slate leading-relaxed max-w-xl">
            A growing collection of experiments, technical explorations, and data-driven projects.
          </p>
        </motion.div>

        {/* Row 2: experiment cards (cols 4–12) */}
        <motion.div
          className="col-span-12 lg:col-span-9 lg:col-start-4 mt-12 space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {experiments.map((exp) => (
            <div key={exp.number} className="swiss-card">
              {/* Card header */}
              <div className="flex items-start gap-4 px-6 py-5 border-b border-charcoal">
                <span className="font-display text-body font-medium text-charcoal/20 shrink-0 pt-1">
                  {exp.number}
                </span>
                <div>
                  <h3 className="font-display text-section font-medium text-charcoal mb-1">{exp.title}</h3>
                  <p className="font-body text-body-sm text-slate leading-relaxed">{exp.subtitle}</p>
                </div>
              </div>

              {/* Steps grid — hairline dividers via gap-px technique */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-silver-gray border-t border-silver-gray">
                {exp.steps.map((step, stepIndex) => (
                  <motion.div
                    key={step.label}
                    className="px-6 py-6 bg-swiss"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: stepIndex * 0.06 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-2 h-2 bg-accent shrink-0" aria-hidden="true" />
                      <span className="font-body text-meta text-charcoal uppercase font-medium">
                        {step.label} — {step.title}
                      </span>
                    </div>
                    <p className="font-body text-body-sm text-slate leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Future entries */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-display text-section font-medium text-charcoal mb-6">POTENTIAL FUTURE ENTRIES</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                  className="swiss-card-soft p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 border border-cool shrink-0" aria-hidden="true" />
                    <h5 className="font-body text-body font-medium text-charcoal">{item.title}</h5>
                  </div>
                  <p className="font-body text-body-sm text-slate leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}