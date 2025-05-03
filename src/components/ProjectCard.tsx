import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  demoLink?: string;
  repoLink?: string;
  imageSrc?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, demoLink, repoLink, imageSrc }) => (
  <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition">
    {imageSrc && <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />}
    <h3 className="text-xl font-semibold text-[#101b38]">{title}</h3>
    <p className="mt-2 text-gray-700">{description}</p>
    <div className="mt-4 space-x-4">
      {demoLink && <a href={demoLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Demo</a>}
      {repoLink && <a href={repoLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Code</a>}
    </div>
  </div>
);