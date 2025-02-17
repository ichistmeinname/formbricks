export interface SurveyOption {
  label: string;
  value: string;
  frontend?: any;
}

export interface SurveyPage {
  id: string;
  endScreen?: boolean;
  elements: SurveyElement[];
  config?: {
    addFieldsToCustomer?: string[];
    autoSubmit?: boolean;
    allowSkip?: boolean;
  };
  branchingRules?: {
    type: "value";
    name: string;
    value: string;
    nextPageId: string;
  }[];
}

export interface SurveyElement {
  id: string;
  name?: string;
  label?: string;
  help?: string;
  type: "radio" | "text" | "checkbox" | "html";
  options?: SurveyOption[];
  component: React.FC<any>;
  frontend?: any;
}

export interface Survey {
  pages: SurveyPage[];
  config?: {
    progressBar?: boolean;
  };
}
