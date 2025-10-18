import ProfileHeader from "./components/ProfileHeader";
import ProfileStats from "./components/ProfileStats";
import SkillBadge from "./components/SkillBadge";
import ProfileCard from "./components/ProfileCard";


function App() {
  return (
    <div style={{ backgroundColor: "#dbe2e9ff", minHeight: "100vh", padding: "40px" }}>
      <ProfileCard>
        <ProfileHeader
          name="Thomas Opeyemi Stephen"
          title="Senior Developer at Publica AI"
          avatar="https://media.licdn.com/dms/image/v2/D4D03AQEWFXPCzfCOKg/profile-displayphoto-crop_800_800/B4DZeMtGNmGYAQ-/0/1750412323255?e=1762387200&v=beta&t=8gFMGRIsWXWPub8jvIFIX1qPLRVqTte9A_Xq2ECALXQ"
        />
        <ProfileStats projects={22} followers={5000} following={100} />
        <div style={{ textAlign: "center" }}>
          <h4>Skills</h4>
          <SkillBadge skill="React" level="Expert" />
          <SkillBadge skill="Node.js" level="Intermediate" />
          <SkillBadge skill="UI/UX Design" level="Beginner" />
          
        </div>
      </ProfileCard>
    </div>
  );
}
export default App;