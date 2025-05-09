function calculateSkillLevel(skill) {
  const skillLevels = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4
  };

  return skillLevels[skill] || 0;
}
function getSkillDescription(skill) {
  const skillDescriptions = {
    beginner: "Just starting out, learning the basics.",
    intermediate: "Has a good understanding and can apply skills.",
    advanced: "Highly skilled and can work independently.",
    expert: "Recognized authority in the field."
  };

  return skillDescriptions[skill] || "No description available.";
}
function getSkillCategory(skill) {
  const skillCategories = {
    programming: ["JavaScript", "Python", "Java"],
    design: ["Photoshop", "Illustrator", "Figma"],
    marketing: ["SEO", "Content Marketing", "Social Media"]
  };

  for (const category in skillCategories) {
    if (skillCategories[category].includes(skill)) {
      return category;
    }
  }

  return "Unknown category";
}
function getSkillLevel(skill) {
  const skillLevels = {
    JavaScript: "advanced",
    Python: "intermediate",
    Java: "expert",
    Photoshop: "beginner",
    Illustrator: "intermediate",
    Figma: "advanced",
    SEO: "expert",
    "Content Marketing": "intermediate",
    "Social Media": "beginner"
  };

  return skillLevels[skill] || "unknown";
}
function getSkillProficiency(skill) {
  const skillProficiencies = {
    JavaScript: "high",
    Python: "medium",
    Java: "very high",
    Photoshop: "low",
    Illustrator: "medium",
    Figma: "high",
    SEO: "very high",
    "Content Marketing": "medium",
    "Social Media": "low"
  };

  return skillProficiencies[skill] || "unknown";
}
function getSkillExperience(skill) {    
  const skillExperiences = {
    JavaScript: "5 years",
    Python: "3 years",
    Java: "7 years",
    Photoshop: "1 year",
    Illustrator: "2 years",
    Figma: "4 years",
    SEO: "6 years",
    "Content Marketing": "3 years",
    "Social Media": "1 year"
  };

  return skillExperiences[skill] || "unknown";
}