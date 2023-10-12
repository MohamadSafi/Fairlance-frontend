import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Signup/Signup';
import * as React from 'react';
import FindJobPage from './pages/FindJob/FindJob';
import FAQ from './pages/FAQ/FAQ';
import CreatePost from './pages/CreatePost/CreatePost';
import PostDetailsPage from './pages/PostDetails/PostDetails';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import MyOffers from './pages/MyOffers/MyOffers';
import FeedBack from './components/FeedBack/FeedBack';

import 'react-toastify/dist/ReactToastify.css';

import Application from './components/DetailedPost/components/Application';
import Profile from './pages/Profile/Profile';
import MyApplications from './pages/MyApplications/MyApplications';
import GuestRoute from './utils/GuestRoute';

import { WagmiConfig, createConfig } from 'wagmi';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { optimismGoerli } from 'wagmi/chains';

const chains = [optimismGoerli];

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    // alchemyId: process.env.ALCHEMY_ID,
    // walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

    alchemyId: 'A-d-yp-QqtXuI3R2lNdLW3PsplDFXn7Q',
    walletConnectProjectId: '5736574953f99877cc682d96dd82bdf0',

    appName: 'Fairlance',
    chains,

    appDescription: '5736574953f99877cc682d96dd82bdf0',
    appUrl: 'fairlance.ru',
    appIcon: 'https://fairlance.com/logo.png',
  }),
);

const posts = [
  {
    id: 1,
    title: 'E-commerce Website Development',
    description:
      "We are looking for a skilled web developer to create an interactive and user-friendly e-commerce website for our online store. The website should have an appealing design, smooth navigation, and secure payment gateways. It should also support inventory management and order tracking. We require a responsive and mobile-friendly platform that can handle a large number of products and customers. The chosen developer will need to integrate various third-party plugins, implement SEO best practices, and ensure the site's optimal performance. If you have prior experience in developing e-commerce websites and possess a strong understanding of web security, we'd like to hear from you.",
    post_tags: 'web development, e-commerce, responsitivity, SEO',
    deadline: '2024-03-02',
    price_min: 10,
    price_max: 100,
  },
  {
    id: 2,
    title: 'Market Research for a New Product Launch',
    description:
      'We require a meticulous market researcher to conduct a thorough analysis of the market landscape for our upcoming product launch. The research should include an assessment of competitors, target audience preferences, pricing strategies, and potential distribution channels. The ideal candidate should have experience in both quantitative and qualitative research methods, be proficient in data analysis, and provide actionable insights to guide our product strategy.',
    post_tags: 'market research, data analysis, strategic thinking',
    deadline: '2023-12-19',
    price_min: 10,
    price_max: 170,
  },
  {
    id: 3,
    title: 'Social Media Marketing Campaign',
    description:
      'We are seeking a creative and results-driven social media marketer to plan and execute a marketing campaign across various platforms. The goal is to increase brand awareness, engage with the audience, and drive website traffic. The ideal candidate should have a strong understanding of social media algorithms, content creation, and analytics. Experience in managing successful social media campaigns for businesses in the same industry is a plus. The selected marketer will be responsible for monitoring performance, making data-driven decisions, and providing regular progress reports.',
    post_tags: 'marketing, social media, reporting, content creation',
    deadline: '2023-11-19',
    price_min: 10,
    price_max: 11,
  },
  {
    id: 4,
    title: 'Content Marketing for a Software Company',
    description:
      "We are in need of a talented content marketer to create compelling and informative content for our software company's blog and website. The content should be SEO optimized and cater to both our target audience and industry trends. The chosen marketer will be responsible for conducting keyword research, writing blog posts, creating engaging website copy, and developing email marketing campaigns. Knowledge of the software industry and experience in B2B content marketing will be highly advantageous.",
    post_tags: 'content marketer, marketing, B2B, marketing campaigns, SEO',
    deadline: '2023-11-13',
    price_min: 10,
    price_max: 20,
  },
  {
    id: 5,
    title: 'Scientific Research Paper Review',
    description:
      "We are seeking a skilled researcher familiar with scientific literature to review and analyze a research paper in the field of environmental science. The reviewer should critically assess the paper's methodology, data analysis, and conclusions. Additionally, they will need to compare it with other relevant studies to provide a well-rounded evaluation. Proficiency in scientific writing and knowledge of environmental science is essential.",
    post_tags: 'research, scientific literature, environmental science, analysis',
    deadline: '2023-11-20',
    price_min: 10,
    price_max: 70,
  },
  {
    id: 6,
    title: 'Creative Content Writing for a Travel Website',
    description:
      'We are looking for a creative and talented content writer to produce engaging and SEO-friendly articles for our travel website. The articles should cover various travel destinations, tips, and experiences. The ideal candidate should have a passion for travel, exceptional writing skills, and the ability to optimize content for search engines. Prior experience in travel writing and a strong portfolio will be advantageous.',
    post_tags: 'content writing, travel, SEO',
    deadline: '2022-12-25',
    price_min: 10,
    price_max: 60,
  },
];

function App () {
  React.useEffect(() => {
    const jobs = posts.map((v, id, __) => JSON.stringify(v));
    console.log(jobs);
    const isSetJob = localStorage.getItem('isSetJobs');
    if (!isSetJob) {
      localStorage.setItem('jobs', JSON.stringify(jobs));
      localStorage.setItem('isSetJobs', '1');
    }
  }, []);

  return (
    <>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <AuthProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<GuestRoute />}>
                <Route path='/login' element={<LoginPage />} />
              </Route>
              <Route path='/signup' element={<GuestRoute />}>
                <Route path='/signup' element={<SignupPage />}></Route>
              </Route>
              <Route path='/faq' element={<FAQ />}></Route>

              <Route path='/create-post' element={<PrivateRoute />}>
                <Route path='/create-post' element={<CreatePost />}></Route>
              </Route>

              <Route path='/faq' element={<FAQ />} />

              <Route path='/find-job' element={<PrivateRoute />}>
                <Route path='/find-job' element={<FindJobPage />}></Route>
              </Route>

              <Route path='/post/:id' element={<PrivateRoute />}>
                <Route path='/post/:id' element={<PostDetailsPage />}></Route>
              </Route>

              <Route path='/offers' element={<MyOffers />}></Route>
              <Route path='/post/:projectid/application/:id' element={<PrivateRoute />}>
                <Route path='/post/:projectid/application/:id' element={<Application />}></Route>
              </Route>

              <Route path='/applications' element={<PrivateRoute />}>
                <Route path='/applications' element={<MyApplications />}></Route>
              </Route>

              <Route path='/profile/' element={<Profile />}>
                <Route path='/profile/' element={<Profile />} />
              </Route>
            </Routes>
          </AuthProvider>
          <ToastContainer position='bottom-right' autoClose={2000} hideProgressBar={true} />
          <FeedBack></FeedBack>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
