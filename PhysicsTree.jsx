import React, { useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Button } from '@/components/ui/button';

const physicsTopics = {
  "Classical Mechanics": [
    "Kinematics",
    "Dynamics",
    "Work, Energy, and Power",
    "Momentum",
    "Rotational Motion",
    "Gravitation"
  ],
  "Thermodynamics": [
    "Temperature and Heat",
    "Laws of Thermodynamics",
    "Heat Engines and Entropy",
    "Kinetic Theory of Gases"
  ],
  "Electromagnetism": [
    "Electrostatics",
    "Electric Circuits",
    "Magnetism",
    "Maxwell’s Equations"
  ],
  "Waves and Optics": [
    "Wave Properties",
    "Sound Waves",
    "Light Waves",
    "Reflection and Refraction",
    "Interference and Diffraction",
    "Polarization"
  ],
  "Modern Physics": [
    "Quantum Mechanics",
    "Atomic Physics",
    "Nuclear Physics",
    "Relativity"
  ],
  "Applied Physics": [
    "Computational Modeling",
    "Engineering Physics",
    "Biophysics",
    "Geophysics"
  ],
  "Experimental Physics": [
    "Measurement and Uncertainty",
    "Data Analysis",
    "Laboratory Instruments"
  ],
  "Astrophysics and Cosmology": [
    "Stellar Structure",
    "Cosmological Models",
    "Big Bang Theory",
    "Dark Matter and Energy"
  ]
};

export default function PhysicsTopicSelector() {
  const [selectedTopics, setSelectedTopics] = useState(new Set());
  const [showAssessment, setShowAssessment] = useState(false);

  const toggleTopic = (topic) => {
    const newSet = new Set(selectedTopics);
    newSet.has(topic) ? newSet.delete(topic) : newSet.add(topic);
    setSelectedTopics(newSet);
  };

  const renderTree = () => (
    <Tree
      lineWidth={'2px'}
      lineColor={'#ccc'}
      lineBorderRadius={'8px'}
      label={<strong>Physics</strong>}
    >
      {Object.entries(physicsTopics).map(([main, subs]) => (
        <TreeNode key={main} label={<strong>{main}</strong>}>
          {subs.map((sub) => (
            <TreeNode
              key={sub}
              label={
                <label>
                  <input
                    type="checkbox"
                    checked={selectedTopics.has(sub)}
                    onChange={() => toggleTopic(sub)}
                  />{' '}
                  {sub}
                </label>
              }
            />
          ))}
        </TreeNode>
      ))}
    </Tree>
  );

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Select Physics Topics</h1>
      {renderTree()}
      <Button onClick={() => setShowAssessment(true)}>Start Assessment</Button>
      {showAssessment && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Assessment</h2>
          <ul className="list-disc list-inside">
            {[...selectedTopics].map((topic, idx) => (
              <li key={idx}>Question about: {topic}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
