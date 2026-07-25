/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout } from "@/src/components/Layout";
import { Hero, Highlights, HiringFit, Experience, Education, Skills, Projects, Contact } from "@/src/components/Sections";

export default function App() {
  return (
    <Layout>
      <Hero />
      <Highlights />
      <HiringFit />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

