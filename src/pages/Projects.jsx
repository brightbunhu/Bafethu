import { useMemo, useState } from 'react';
import GalleryCard from '../components/GalleryCard.jsx';
import Seo from '../components/Seo.jsx';
import { projects } from '../data/projects.js';

const categories = ['All', 'Weddings', 'Funerals', 'Birthdays', 'Corporate Events'];

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }

    return projects.filter((project) => project.eventType === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Seo
        title="Bafethu Events Projects Gallery"
        description="View Bafethu Events & Logistics project gallery for weddings, funerals, birthdays and corporate event equipment setups in Zimbabwe."
      />

      <section className="page-title-section">
        <div className="container">
          <h1>OUR DONE PROJECTS</h1>
          <p>A glimpse of events we have made successful</p>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="filter-bar centered" role="tablist" aria-label="Project categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid projects-page-grid">
            {filteredProjects.concat(filteredProjects).slice(0, 12).map((project, index) => (
              <GalleryCard key={`${project.eventType}-${project.location}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
