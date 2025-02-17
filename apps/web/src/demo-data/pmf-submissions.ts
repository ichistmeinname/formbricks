const improvements = [
  "Please provide a mobile app so I can check my account balance on the go",
  "Make it possible to archive old transactions",
  "Make it possible to add a note to a transaction",
  "A mobile app would be awesome",
  "I would like to be able to add a note to a transaction",
  "I would like to be able to archive old transactions",
  "I think a cool feature would be if I could organize my transactions into categories",
  "Offer more customization options for budgeting and financial planning tools",
  "Allow users to create custom categories for their expenses",
  "Provide more granular control over budgeting and expense tracking",
  "Introduce a dark mode option for the app to reduce eye strain",
  "Allow users to customize the app's color scheme",
  "Add a night-time mode to automatically switch to a darker color scheme after sunset",
  "Enable users to track their credit score directly within the app",
  "Provide personalized credit score recommendations and advice",
  "Offer tips on how to improve credit scores based on user data and trends",
  "Integrate more third-party financial and accounting software into the app",
  "Allow users to connect to a wider range of financial services and accounts",
  "Provide in-app recommendations for complementary financial tools and services",
  "Provide more detailed analytics and insights on business performance",
  "Allow users to customize the data displayed in their analytics dashboard",
  "Provide automated insights and recommendations based on user data and trends",
  "Offer more in-app educational resources and tutorials",
  "Create a dedicated knowledge base for common financial questions and issues",
  "Provide personalized onboarding and training for new users",
  "Improve app performance and speed to reduce load times",
  "Optimize the app's code and reduce its memory footprint",
  "Introduce server-side rendering for faster and more efficient data loading",
  "Provide more comprehensive security features to protect user data",
  "Offer biometric authentication options like facial recognition or fingerprint scanning",
  "Allow users to control the frequency and types of notifications they receive for account activity",
  "Create more engaging and user-friendly onboarding screens and prompts",
  "Introduce gamification features to make the app more fun and interactive",
  "Provide personalized onboarding experiences based on user needs and preferences",
  "Improve accessibility features to make the app more inclusive",
  "Introduce support for screen readers and assistive technology",
  "Provide closed captioning and subtitles for in-app videos and tutorials",
];

const mainBenefitsMap = [
  { benefit: "I like that I can see my account balance", aligned: false },
  {
    benefit:
      "I like that I can see my transactions at a glance. It works much better for me than with other apps.",
    aligned: false,
  },
  { benefit: "getting a notification when I receive money", aligned: false },
  { benefit: "Seeing all my transactions in one place", aligned: true },
  { benefit: "I like that I can see my account balance", aligned: false },
  { benefit: "Totally love the notifications when I receive money", aligned: false },
  { benefit: "The best is that I can get an overview of all my transactions", aligned: false },
  { benefit: "Love the notifications when I receive money", aligned: false },
  { benefit: "The notifications when I receive money are great", aligned: false },
  { benefit: "Convenient and fast access to financial information", aligned: false },
  { benefit: "Quick and easy access to financial information on-the-go", aligned: false },
  { benefit: "Ability to view real-time account balances", aligned: false },
  { benefit: "Instant access to up-to-date account balances", aligned: false },
  { benefit: "Easy and secure online payments and transfers", aligned: false },
  { benefit: "Effortless and safe online payments and transfers", aligned: false },
  { benefit: "Streamlined expense tracking and management", aligned: true },
  { benefit: "Simplified and organized expense tracking and management", aligned: true },
  { benefit: "Automated bill payment and invoicing", aligned: false },
  { benefit: "Effortless bill payment and invoicing automation", aligned: false },
  { benefit: "Integration with other financial and accounting software", aligned: false },
  { benefit: "Seamless integration with other financial and accounting software", aligned: false },
  { benefit: "Customizable budget and financial planning tools", aligned: false },
  { benefit: "Tailored budget and financial planning tools to fit your needs", aligned: false },
  { benefit: "Automated tax preparation and filing", aligned: false },
  { benefit: "Effortless tax preparation and filing automation", aligned: false },
  { benefit: "Access to financial advisors and resources", aligned: false },
  { benefit: "Expert financial advice and resources at your fingertips", aligned: false },
  { benefit: "Seamless integration with personal banking accounts", aligned: false },
  { benefit: "Effortless integration with your personal banking accounts", aligned: false },
  { benefit: "Advanced fraud protection and security measures", aligned: false },
  { benefit: "Top-of-the-line fraud protection and security measures", aligned: false },
  { benefit: "Ability to deposit checks remotely", aligned: false },
  { benefit: "Convenient and easy remote check deposit", aligned: false },
  { benefit: "Real-time notifications for account activity and transactions", aligned: false },
  { benefit: "Instant notifications for account activity and transactions", aligned: false },
  { benefit: "Easy loan and credit card application and management", aligned: false },
  { benefit: "Effortless loan and credit card application and management", aligned: false },
  { benefit: "Customizable user permissions for team members", aligned: false },
  { benefit: "Flexible user permissions to manage team members", aligned: false },
  { benefit: "Automatic transaction categorization and tagging", aligned: false },
  { benefit: "Efficient automatic transaction categorization and tagging", aligned: true },
  { benefit: "Ability to reconcile accounts quickly and accurately", aligned: false },
  { benefit: "Effortless and accurate account reconciliation", aligned: true },
  { benefit: "Data analytics and insights for business performance", aligned: false },
  { benefit: "Insightful data analytics to optimize business performance", aligned: false },
  { benefit: "Simple and intuitive user interface", aligned: true },
  { benefit: "User-friendly and intuitive interface for ease of use", aligned: false },
  { benefit: "24/7 customer support and assistance", aligned: false },
  { benefit: "24/7 access to helpful customer support and assistance", aligned: false },

  { benefit: "Keep track of your expenses with ease and simplicity.", aligned: true },
  { benefit: "Take control of your finances with our effortless expense tracking solution.", aligned: true },
  { benefit: "Our app makes managing your expenses a breeze with its user-friendly design.", aligned: true },
  {
    benefit: "Easily monitor your spending habits with our simple and intuitive expense tracking tool.",
    aligned: true,
  },
  {
    benefit:
      "Spend less time managing your finances and more time living life with our streamlined expense tracking system.",
    aligned: true,
  },
  {
    benefit: "Stay on top of your budget effortlessly with our hassle-free expense tracking feature.",
    aligned: true,
  },
  {
    benefit:
      "Our expense tracking solution simplifies your financial management, giving you more time for the things that matter most.",
    aligned: true,
  },
  {
    benefit:
      "Take the guesswork out of managing your expenses with our easy-to-use tracking and reporting features.",
    aligned: true,
  },
  {
    benefit: "Our app's simple expense tracking helps you achieve financial freedom without the headache.",
    aligned: true,
  },
  {
    benefit:
      "Simplify your life and your finances with our powerful yet easy-to-use expense tracking solution.",
    aligned: true,
  },
];

const mainBenefits = mainBenefitsMap.map((b) => b.benefit);

const roles = ["founder", "executive", "productManager", "productOwner", "softwareEngineer"];

const disappointments = [
  "veryDisappointed",
  "veryDisappointed",
  "veryDisappointed",
  "somewhatDisappointed",
  "somewhatDisappointed",
  "notDisappointed",
];

const benefitingUsers = [
  "Founders",
  "Executives",
  "Product Managers",
  "Product Owners",
  "Software Engineers",
  "Designers",
  "Other founders",
  "Other executives",
  "Other product managers",
  "Other product owners",
  "My befriended software engineers",
  "My befriended designers",
  "My befriended founders",
  "I think other founders would like this",
  "I think other executives would like this",
  "I think other product managers would like this",
  "Entrepreneurs and small business owners",
  "Freelancers and independent contractors",
  "Busy professionals with limited time for in-person banking",
  "Individuals who frequently travel or work remotely",
  "Students and young adults new to managing their finances",
  "Families and households with multiple bank accounts",
  "Individuals with complex financial portfolios and investments",
  "Elderly or disabled individuals who have difficulty with in-person banking",
  "Individuals looking to improve their financial literacy and money management skills",
  "People who frequently make online purchases or payments",
  "Individuals who prioritize financial transparency and accountability",
  "People who value the convenience of mobile and online banking",
  "Individuals who want to simplify and streamline their financial management",
  "People who want to track their spending and save money more effectively",
  "Individuals who want to stay on top of their bills and avoid late fees",
  "People who want to minimize their financial stress and anxiety",
  "Individuals who are environmentally conscious and want to reduce paper waste",
  "People who value user-friendly and intuitive technology",
  "Individuals who want to optimize their financial performance and growth",
  "People who want to protect their finances and personal information from fraud and theft",
];

export const getPmfSubmissions = () => {
  const submissions = [];
  for (let i = 0; i < 142; i++) {
    submissions.push({
      id: `demo-pmf-submission-${i}`,
      createdAt: "2023-02-08T11:04:04.084Z",
      updatedAt: "2023-02-08T11:04:09.752Z",
      finished: true,
      archived: false,
      formId: "demo-pmf",
      customerEmail: "user@example.com",
      customerOrganisationId: "demo-organisation",
      data: {
        improvement: getRandomItem(improvements),
        mainBenefit: getRandomItem(mainBenefits),
        role: getRandomItem(roles),
        disappointment: getRandomItem(disappointments),
        benefitingUsers: getRandomItem(benefitingUsers),
      },
      meta: {
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
      },
    });
  }
  return submissions;
};

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}
