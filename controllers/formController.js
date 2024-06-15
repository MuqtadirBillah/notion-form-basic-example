const { default: axios } = require("axios");

const whatsAppGroupMemebershipRegistration = (req, res)=>{    
    let rq = req.body;
    axios.post(`https://api.notion.com/v1/pages`, 
            {
                // replace **** with your database id in notion
                parent: { database_id: "************" },
                properties: {
                    'Full Name': { rich_text: [{ text: { content: rq.full_name } }] },
                    'City': { rich_text: [{ text: { content: rq.full_name } }] },
                    'Contact Number': { phone_number: rq.phone_number },
                    'Email Address': { email: rq.email_address },
                    'Current Employer': { rich_text: [{ text: { content: rq.full_name } }] },
                    'Previous Employers (Past Experience)': { rich_text: [{ text: { content: rq.full_name } }] },
                    'Designation/Role': { rich_text: [{ text: { content: rq.full_name } }] },
                    'Years of Experience': { number: parseInt(rq.brand_estimation) },
                    'Degree Qualification': { rich_text: [{ text: { content: rq.full_name } }] },
                    'ASP/CSP': { rich_text: [{ text: { content: rq.full_name } }] },
                    'ANY INTERNATIONAL DIPLOMA': { rich_text: [{ text: { content: rq.full_name } }] },
                    'IRCA LEAD AUDITOR QUALIFICATIONS': { rich_text: [{ text: { content: rq.full_name } }] },
                    'ANY OTHER QUALIFICATION': { rich_text: [{ text: { content: rq.full_name } }] },
                    'ACHIEVEMENTS': { rich_text: [{ text: { content: rq.full_name } }] },
                    'PROFESSIONAL MEMBERSHIPS': { rich_text: [{ text: { content: rq.full_name } }] },
                    'AUTHORIZATIONS': { rich_text: [{ text: { content: rq.full_name } }] },
                    'ABOUT ME (SHORT INTRO)': { rich_text: [{ text: { content: rq.full_name } }] },
                },
            },
            {
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    // Replace secret_key with your notion secret key
                    Authorization: `Bearer secret_key`,
                    'Notion-Version': '2021-05-13',
                },
            }
        )
    .then(response=>{

        res.status(200).json({ data: response.data, status: "success" });
    })
    .catch(error=>{
        console.error('Error saving data:', error);
        console.log(error.response.data.status)
        res.status(500).json({ status: "error", message: error.response.data.code ? error.response.data.code : "Something went wrong!", error: error });
    })
}

module.exports = {
    whatsAppGroupMemebershipRegistration
}