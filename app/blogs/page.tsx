import { GetStaticProps } from 'next';
import { blogs } from '@/data';
import Blogs from '../../components/Blogs';
import { FloatingNav } from '../../components/ui/FloatingNavbar';
import ContentSection from '../../components/ui/ContentSection';
import { navItems } from "@/data";
import BlogDetails from '../../components/ui/BlogDetails';
import Footer from '../../components/Footer';


const BlogPage = () => {
  return (
   
    <>
      <div style={{ marginTop: "180px" }}>
        <ContentSection
          title="Welcome to"
          titleHighlight="Instagram Story"
          content="Instagram stories have become a popular feature on the platform, allowing users to share photos and videos that disappear after 24 hours. "
      
        />
     
      </div>
    <FloatingNav navItems={navItems} />
    <BlogDetails/>
    <Footer/>
    </>
  );

};

export default BlogPage;