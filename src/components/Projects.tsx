import ProjectCard from './layouts/ProjectCard';
import styles from '@styles/modules/Projects.module.css';
import blogPostPreview from '@assets/previews/blog-post.png';
import stickyThoughtsPreview from '@assets/previews/sticky-thoughts.png';

const Projects = () => {
  return (
    <section id="projects">
      <div className={`${styles.projects__container} container container--section`}>
        <h2>Projects</h2>

        <ProjectCard
          title="Sticky Thoughts"
          description={
            <>
              Post your thoughts, opinions, and experiences anonymously. Whether you&apos;re looking
              to vent about your day, share your political views, or connect with other people.
            </>
          }
          image={stickyThoughtsPreview}
          techStack={['React', 'Firebase', 'Mantine']}
          liveLink="https://sticky-thoughts.netlify.app/"
          sourceLink="https://github.com/alexndrho/sticky-thoughts"
        />

        <ProjectCard
          title="Blog"
          description={
            <>
              A blog posting website allows users to create an account, write blogs in Markdown
              format, and add photos, videos, and other media. Users can also update their personal
              information and upload a profile picture.
            </>
          }
          image={blogPostPreview}
          techStack={['MongoDB', 'Express', 'React', 'Node', 'Stitches']}
          liveLink="https://blog-post-k6bm.onrender.com/"
          sourceLink="https://github.com/alexndrho/blog-post"
        />
      </div>
    </section>
  );
};

export default Projects;
