import { IMenuType } from "./types";

export const menuItems: IMenuType[] = [
  {
    label: 'about',
    isSubmenu: true,
    subItems: [
      { label: 'information', link: '/about/information' },
      { label: 'general information', link: '/about/general-information' },
      { label: 'rules of campus entry', link: '/about/rules-of-campus-entry' },
      { label: 'why study here', link: '/about/why-study-here' },
      { label: 'resources', link: '/about/resources' },
      { label: 'career', link: '/about/career' }
    ]
  },
  {
    label: 'academics',
    isSubmenu: true,
    subItems: [
      {
        label: 'faculties',
        isSubmenu: true,
        subItems: [
          { label: 'arts and social science', link: '/academics/faculties/arts-and-social-science' },
          { label: 'business administration', link: '/academics/faculties/business-administration' },
          { label: 'engineering', link: '/academics/faculties/engineering' },
          { label: 'science and technology', link: '/academics/faculties/science-and-technology' }
        ]
      },
      {
        label: 'information',
        isSubmenu: true,
        subItems: [
          { label: 'academic calendar', link: '/academics/information/academic-calendar' },
          { label: 'academic regulations', link: '/academics/information/academic-regulations' },
          { label: 'course catalog', link: '/academics/information/course-catalog' },
          { label: 'tuition fee', link: '/academics/information/tuition-fee' },
          { label: 'faculty list', link: '/academics/information/faculty-list' }
        ]
      },
      {
        label: 'partnerships',
        link: '/academics/partnerships',
        isSubmenu: true,
        subItems: [
          { label: 'internationalization', link: '/academics/partnerships/internationalization' },
          { label: 'academic partners', link: '/academics/partnerships/academic-partners' },
          { label: 'strategic partners', link: '/academics/partnerships/strategic-partners' }
        ]
      },
      {
        label: 'institutes',
        link: '/academics/institutes',
        isSubmenu: true,
        subItems: [
          { label: 'institute of continuing education', link: '/academics/institutes/continuing-education' }
        ]
      },
      {
        label: 'accreditations',
        link: '/academics/accreditations',
        isSubmenu: true,
        subItems: [
          { label: 'IQAC', link: '/academics/accreditations/iqac' },
          { label: 'CETL', link: '/academics/accreditations/cetl' }
        ]
      }
    ]
  },
  { label: 'admission', link: '/admission' },
  { label: 'on campus', link: '/on-campus' },
  {
    label: 'administration',
    link: '/administration',
    isSubmenu: true,
    subItems: [
      {
        label: 'the vice chancellor',
        link: '/administration/vice-chancellor',
        isSubmenu: true,
        subItems: [
          { label: 'message', link: '/administration/vice-chancellor/message' },
          { label: 'profile', link: '/administration/vice-chancellor/profile' }
        ]
      },
      { label: 'the pro vice chancellor', link: '/administration/pro-vice-chancellor' },
      { label: 'the chairman', link: '/administration/chairman' },
      { label: 'the founders', link: '/administration/founders' },
      { label: 'institution policy', link: '/administration/institution-policy' },
      {
        label: 'offices',
        link: '/administration/offices',
        isSubmenu: true,
        subItems: [
          { label: 'office of controller of examinations', link: '/administration/offices/controller-examinations' },
          { label: 'office of cultural affairs', link: '/administration/offices/cultural-affairs' },
          { label: 'office of finance and audit', link: '/administration/offices/finance-audit' },
          { label: 'office of human resources', link: '/administration/offices/human-resources' },
          { label: 'office of placement and alumni', link: '/administration/offices/placement-alumni' },
          { label: 'office of planning and development', link: '/administration/offices/planning-development' },
          { label: 'office of probation', link: '/administration/offices/probation' },
          { label: 'office of public relations', link: '/administration/offices/public-relations' },
          { label: 'office of registrar', link: '/administration/offices/registrar' },
          { label: 'office of sports', link: '/administration/offices/sports' },
          { label: 'office of students affairs', link: '/administration/offices/students-affairs' }
        ]
      }
    ]
  },
  {
    label: 'research',
    link: '/research',
    isSubmenu: true,
    subItems: [
      { label: 'research overview', link: '/research/overview' },
      {
        label: 'publications',
        link: '/research/publications',
        isSubmenu: true,
        subItems: [
          { label: 'faculty publications', link: '/research/publications/faculty' },
          { label: 'student publications', link: '/research/publications/student' }
        ]
      },
      {
        label: 'journals',
        link: '/research/journals',
        isSubmenu: true,
        subItems: [
          { label: 'AJBE', link: '/research/journals/ajbe' },
          { label: 'AJSE', link: '/research/journals/ajse' }
        ]
      },
      { label: 'research groups', link: '/research/groups' },
      { label: 'IRB', link: '/research/irb' },
      {
        label: 'research center',
        link: '/research/center',
        isSubmenu: true,
        subItems: [
          { label: 'CSER', link: '/research/center/cser' },
          { label: 'CNR', link: '/research/center/cnr' },
          { label: 'BIC', link: '/research/center/bic' }
        ]
      },
      {
        label: 'conferences',
        link: '/research/conferences',
        isSubmenu: true,
        subItems: [
          { label: 'upcoming', link: '/research/conferences/upcoming' },
          { label: 'past', link: '/research/conferences/past' }
        ]
      },
      { label: 'library', link: '/research/library' },
      { label: 'collaborating institutes', link: '/research/collaborating-institutes' },
      { label: 'innovations', link: '/research/innovations' }
    ]
  },
  { label: 'alumni', link: '/alumni' },
  { label: 'future students', link: '/future-students' },
  { label: 'convocation', link: '/convocation' }
];