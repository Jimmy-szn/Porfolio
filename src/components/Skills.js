// Create your Skills component here
import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaBootstrap, FaPython, FaJava, FaDatabase, FaLinux, FaWindows, FaNodeJs, FaCloud, FaAndroid, FaGitAlt, FaAws, FaMobileAlt, FaCuttlefish, FaUserFriends, FaBug, FaNetworkWired, FaRegLightbulb } from "react-icons/fa";
import { SiKotlin, SiDart, SiMongodb, SiMysql, SiFirebase, SiExpress, SiCplusplus, SiScrumalliance } from "react-icons/si";


const Skills = () => {
const skillsArr = [
	{ name: 'JavaScript', icon: FaJs },
	{ name: 'Python', icon: FaPython },
	{ name: 'Java', icon: FaJava },
	{ name: 'C/C++', icon: SiCplusplus },
	{ name: 'Kotlin', icon: SiKotlin },
	{ name: 'Dart', icon: SiDart },
	{ name: 'HTML', icon: FaHtml5 },
	{ name: 'CSS', icon: FaCss3 },
	{ name: 'React', icon: FaReact },
	{ name: 'Node.js', icon: FaNodeJs },
	{ name: 'Express.js', icon: SiExpress },
	{ name: 'Bootstrap', icon: FaBootstrap },
	{ name: 'Flutter', icon: FaMobileAlt },
	{ name: 'Android', icon: FaAndroid },
	{ name: 'MySQL', icon: SiMysql },
	{ name: 'MongoDB', icon: SiMongodb },
	{ name: 'SQLite', icon: FaDatabase },
	{ name: 'Firebase', icon: SiFirebase },
	{ name: 'Git', icon: FaGitAlt },
	{ name: 'GitHub', icon: FaGithub },
	{ name: 'Linux', icon: FaLinux },
	{ name: 'Windows', icon: FaWindows },
	{ name: 'Cybersecurity', icon: FaBug },
	{ name: 'Data Structures & Algorithms', icon: FaRegLightbulb },
	{ name: 'Software Engineering', icon: FaCuttlefish },
	{ name: 'UI/UX Design', icon: FaReact },
	{ name: 'Web Development', icon: FaHtml5 },
	{ name: 'Networking', icon: FaNetworkWired },
	{ name: 'Cloud Basics', icon: FaCloud },
	{ name: 'Problem Solving', icon: FaBug },
	{ name: 'Agile & Scrum', icon: SiScrumalliance },
	{ name: 'Communication & Teamwork', icon: FaUserFriends }
];
return (
<div id='skills' className='skills'>
<h2 className='title'>Skills</h2>
<div className='skill-holder'>
{
skillsArr.map((skill, index) => {
const Icon = skill.icon;
return (
<i key={index} className='skill-cards'>
<Icon className='skill-icon'/>
<p
className="skill"
>
{skill.name}
</p>
</i>
)
})
}
</div>
</div>
)
}
export default Skills;