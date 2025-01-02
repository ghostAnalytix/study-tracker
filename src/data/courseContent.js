// src/data/courseContent.js

export const courseContent = {
  moduleA: {
    title: "Module A: Programming",
    weeks: [
      {
        week: 1,
        topics: [
          {
            title: "Linear Algebra",
            items: [
              {
                title: "Vectors and Scalars",
                subtopics: [
                  "Definitions",
                  "Properties",
                  "Basic operations (addition, scalar multiplication)",
                ],
              },
              {
                title: "Matrix Operations",
                subtopics: [
                  "Addition",
                  "Multiplication",
                  "Transposition",
                  "Inverses",
                ],
              },
              {
                title: "Determinants",
                subtopics: ["Calculation", "Properties"],
              },
              {
                title: "Linear Systems of Equations",
                subtopics: [
                  "Solving using substitution",
                  "Elimination",
                  "Matrix methods (e.g., Gaussian elimination)",
                ],
              },
              {
                title: "Eigenvalues and Eigenvectors",
                subtopics: ["Their role", "Computation"],
              },
              {
                title: "Dot Product and Cross Product",
                subtopics: ["Applications", "Geometric interpretation"],
              },
              {
                title: "Matrix Decomposition",
                subtopics: ["Singular value decomposition (SVD)"],
              },
            ],
          },
          {
            title: "Basic Statistics",
            items: [
              {
                title: "Descriptive Statistics",
                subtopics: [
                  "Mean",
                  "Median",
                  "Mode",
                  "Variance",
                  "Standard deviation",
                ],
              },
              {
                title: "Probability Basics",
                subtopics: [
                  "Definitions",
                  "Conditional probability",
                  "Bayes theorem",
                ],
              },
              {
                title: "Distributions",
                subtopics: ["Normal", "Binomial", "Poisson", "Properties"],
              },
              {
                title: "Correlation and Covariance",
                subtopics: ["Measures of relationships between variables"],
              },
              {
                title: "Statistical Inference",
                subtopics: [
                  "Hypothesis testing",
                  "P-values",
                  "Confidence intervals",
                ],
              },
            ],
          },
          {
            title: "Python Setup & Basics",
            items: [
              {
                title: "Environment Setup",
                subtopics: [
                  "Conda installation",
                  "Jupyter setup",
                  "Basic configuration",
                ],
              },
              {
                title: "Python Fundamentals",
                subtopics: ["Variables", "Data types", "Basic operations"],
              },
            ],
          },
        ],
      },
      // Weeks 2-8 would go here
    ],
  },
  moduleB: {
    title: "Module B: Neuroscience & Behaviour",
    weeks: [
      {
        week: 1,
        topics: [
          {
            title: "Introduction to Neuroscience",
            items: [
              {
                title: "Brain Structure and Function",
                subtopics: [
                  "Neurons and Synapses",
                  "Brain Regions",
                  "Neural Networks",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  moduleC: {
    title: "Module C: Data Analysis for Neuroimaging",
    weeks: [
      {
        week: 1,
        topics: [
          {
            title: "Neuroimaging Basics",
            items: [
              {
                title: "Introduction to Brain Imaging",
                subtopics: [
                  "MRI Fundamentals",
                  "fMRI Basics",
                  "Image Processing",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
