import { motion } from "framer-motion";

const techStack = [
  "Power BI",
  "SQL",
  "PostgreSQL",
  "Python",
  "DAX",
  "Power Query",
  "YOLO",
  "Computer Vision",
  "Data Analytics"
];

const responsibilities = [
  "Developed interactive Power BI dashboards for KPI tracking, customer analytics, and reporting.",
  "Extracted and transformed data using SQL, PostgreSQL, and MySQL.",
  "Performed Market Basket Analysis using Python on 50K+ transaction records.",
  "Built dashboards using DAX and Power Query for sales and product analysis.",
  "Worked on AI analytics projects involving YOLO object detection and facial recognition systems.",
  "Generated actionable business insights through data visualization and analytics."
];

export default function ExperienceSection() {
  return (
    <section id="experience-section" className="premium-experience-section">
      <motion.article
        className="experience-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.24 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="experience-card-header">
          <div>
            <span className="experience-eyebrow">Jun 2025 - Present</span>
            <h3>Prowesstics</h3>
            <p className="experience-role">Data Analyst</p>
          </div>
          <div className="experience-meta">
            <span>Full-Time</span>
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </div>

        <div className="experience-grid">
          <div className="experience-impact">
            <span className="impact-number">50K+</span>
            <span className="impact-label">transaction records analyzed for Market Basket Analysis</span>
          </div>
          <ul className="experience-list">
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="experience-tags" aria-label="Prowesstics tech stack">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </motion.article>
    </section>
  );
}
