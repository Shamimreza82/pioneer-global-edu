'use client'

import { Target, Eye, Heart, Shield, Lightbulb, Handshake } from 'lucide-react'
import { AnimatedSection } from '@/components/common/SectionWrapper'

const values = [
  { icon: Heart, title: 'Passion', description: 'We are genuinely passionate about helping students achieve their educational dreams.' },
  { icon: Shield, title: 'Integrity', description: 'We maintain the highest standards of honesty and transparency in all our dealings.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We continuously innovate our approach to provide the best guidance and support.' },
  { icon: Handshake, title: 'Commitment', description: 'We are committed to each student\'s success from first contact to post-arrival.' },
]

const team = [
  { name: 'Dr. Sarah Mitchell', role: 'CEO & Founder', bio: '15+ years in international education, PhD in Higher Education Administration.' },
  { name: 'James Wilson', role: 'Head of Counseling', bio: 'Certified education counselor with expertise in US and UK admissions.' },
  { name: 'Emily Chen', role: 'Visa Specialist', bio: '98% visa success rate, expert in complex visa applications worldwide.' },
  { name: 'Michael Torres', role: 'Director of Partnerships', bio: 'Built relationships with 500+ universities across 50+ countries.' },
]

export function AboutContent() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection>
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                Founded in 2010, Pioneer Global Edu started with a simple mission: to make quality international education accessible to students worldwide. What began as a small counseling office has grown into a premier education consultancy serving thousands of students annually.
              </p>
              <p className="text-muted-foreground">
                Over the past 15 years, we have helped over 10,000 students gain admission to their dream universities across 50+ countries. Our success is built on personalized guidance, expert knowledge, and unwavering commitment to each student&apos;s unique journey.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">15+</div>
                  <div className="text-lg text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <AnimatedSection className="rounded-xl border bg-card p-8">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower students with the knowledge, guidance, and support they need to successfully navigate the complex process of studying abroad and achieve their academic and career aspirations.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="rounded-xl border bg-card p-8">
              <Eye className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the world&apos;s most trusted education consultancy, creating a global community of educated, empowered individuals who drive positive change in their societies.
              </p>
            </AnimatedSection>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1} className="text-center">
                  <div className="rounded-full bg-primary/10 p-4 w-fit mx-auto mb-4">
                    <v.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Meet Our Team</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.1} className="text-center">
                  <div className="rounded-full bg-muted w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
