import StoryCard from "./StoryCard"
import '../public/imagefull.jpeg'
import '../public/profpix.jpeg'

const stories = [
    {
        name: "Cool Modext",
        src: '/../public/imagefull.jpeg',
        profile: '/../public/profpix.jpeg'
    },
    
    {
        name: "Jeff Bezoz",
        src:"https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "Mark Zuckerberg",
        src:"https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Elon Musk",
        src:"https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Bill Gates",
        src:"https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    },
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3
    mx-auto">
        {stories.map((story) =>(
            <StoryCard 
            key={story.src}
            name={story.name}
            src={story.src} 
            profile={story.profile} />
        ))}

    </div>
  )
}

export default Stories