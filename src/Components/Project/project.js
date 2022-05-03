import Pokemon from '../../Assets/pokemon.jpg'
import Netflix from '../../Assets/Netflix.jpg'
const projectsArray = [
  {
    src: Pokemon,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: Netflix,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: '',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

function Projects() {
    return (
      <div className="Project">
        Project
      </div>
    );
  }
  
  export { Projects, projectsArray };
  