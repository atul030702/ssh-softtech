export interface SSHService {
    id: string;
    title: string;
    description: string;
    capabilities: string[];
}

export interface SSHProduct {
    id: string;
    name: string;
    description: string;
    key_features: string[];
    engagement_model: string;
    contact_for_pricing: boolean;
}

export interface SSHCompanyInfo {
    name: string;
    website: string;
    email: string;
    phone: {
        india: string;
        usa: string;
    };
    profile_summary: string;
}

export interface SSHCompanyData {
    company_info: SSHCompanyInfo;
    value_proposition: string[];
    services: SSHService[];
    products: SSHProduct[];
}