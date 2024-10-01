export interface User {
    id: any;
    email: string;    
    first_name: string;
    last_name: string;    
    user_initials: string;
    token?: string;
    phone: string;
    dob: Date;
    dob_day: string;
    dob_month: string;
    dob_year: string;
    age: number;       
    permission_list: Array<string>;
    disabled: boolean;
    last_accessed_at?: Date;        
    created_at?: Date;    
    is_test: boolean;        
    is_enabled_2fa: boolean;    
    avatar: string;
    label: string;
  }