import React from "react";
const routes = {
    NAME: 'Root',
    onboading:{
        NAME: 'onboarding',
        login:{
            NAME: 'Login',
        },
        forgotPassword:{
            NAME: 'forgotPassword',
        }
        
    },
    dashboard:{
        NAME: 'Dashboard Active',
        tabs:{
            NAME: 'DashboardTabs',
            home:{
                NAME: 'HomeTab',
            },
            settings:{
                NAME: 'SettingsTab',
            },
            profile:{
                NAME: 'ProfileTab',
            },
        }
    }
};


 export default routes;