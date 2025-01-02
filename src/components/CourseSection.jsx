import React, { useState, useMemo } from "react";
import ExpandableSelection from "./ExpandableSelection";
import TopicItem from "./TopicItem";
import { courseContent } from "../data/courseContent";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import "./styles/HomePage.css"; // Reuse your homepage CSS

const CourseSection = () => {
  // For optional progress bar
  const [completedTopics, setCompletedTopics] = useState(0);

  // Calculate total # of topics
  const totalTopics = useMemo(() => {
    const getTopicCount = (module) =>
      module.weeks.reduce(
        (sum, week) =>
          sum + week.topics.reduce((acc, t) => acc + t.items.length, 0),
        0
      );

    return (
      getTopicCount(courseContent.moduleA) +
      getTopicCount(courseContent.moduleB) +
      getTopicCount(courseContent.moduleC)
    );
  }, []);

  const progressPercentage = totalTopics
    ? Math.round((completedTopics / totalTopics) * 100)
    : 0;

  // Optional callback to track completed topics
  const handleCompletion = (isCompleted) => {
    setCompletedTopics((prev) => (isCompleted ? prev + 1 : prev - 1));
  };

  return (
    <div>
      {/* Hero section: reuse .hero styles */}
      <div className="hero course-hero">
        <h1>Course Curriculum</h1>
        <p>Explore the path through computational neuroscience fundamentals</p>
      </div>

      {/* Main Container: reuse .container styles */}
      <div className="container">
        {/* Optional progress bar */}
        <div className="progress-bar-wrapper">
          <div className="progress-labels">
            <span>Overall Progress</span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Curriculum content: each module as a card */}
        <div className="course-card-grid">
          {/* Module A */}
          <Card className="course-card">
            <CardHeader>
              <CardTitle>{courseContent.moduleA.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {courseContent.moduleA.weeks.map((week, wIdx) => (
                <ExpandableSelection
                  key={wIdx}
                  title={`Week ${week.week}`}
                  icon="📅"
                >
                  {week.topics.map((topic, tIdx) => (
                    <ExpandableSelection
                      key={tIdx}
                      title={topic.title}
                      icon="📖"
                    >
                      {topic.items.map((item, iIdx) => (
                        <TopicItem
                          key={iIdx}
                          title={item.title}
                          subtopics={item.subtopics}
                          onComplete={handleCompletion}
                        />
                      ))}
                    </ExpandableSelection>
                  ))}
                </ExpandableSelection>
              ))}
            </CardContent>
          </Card>

          {/* Module B */}
          <Card className="course-card">
            <CardHeader>
              <CardTitle>{courseContent.moduleB.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {courseContent.moduleB.weeks.map((week, wIdx) => (
                <ExpandableSelection
                  key={wIdx}
                  title={`Week ${week.week}`}
                  icon="📅"
                >
                  {week.topics.map((topic, tIdx) => (
                    <ExpandableSelection
                      key={tIdx}
                      title={topic.title}
                      icon="🧠"
                    >
                      {topic.items.map((item, iIdx) => (
                        <TopicItem
                          key={iIdx}
                          title={item.title}
                          subtopics={item.subtopics}
                          onComplete={handleCompletion}
                        />
                      ))}
                    </ExpandableSelection>
                  ))}
                </ExpandableSelection>
              ))}
            </CardContent>
          </Card>

          {/* Module C */}
          <Card className="course-card">
            <CardHeader>
              <CardTitle>{courseContent.moduleC.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {courseContent.moduleC.weeks.map((week, wIdx) => (
                <ExpandableSelection
                  key={wIdx}
                  title={`Week ${week.week}`}
                  icon="📅"
                >
                  {week.topics.map((topic, tIdx) => (
                    <ExpandableSelection
                      key={tIdx}
                      title={topic.title}
                      icon="🔬"
                    >
                      {topic.items.map((item, iIdx) => (
                        <TopicItem
                          key={iIdx}
                          title={item.title}
                          subtopics={item.subtopics}
                          onComplete={handleCompletion}
                        />
                      ))}
                    </ExpandableSelection>
                  ))}
                </ExpandableSelection>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer: reuse homepage footer style */}
      <footer>
        <p>&copy; 2025 Neuro Ghost Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CourseSection;
