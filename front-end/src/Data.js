export const Data =  {
    Issues: [{
       issue_id: 1,
       title:'Improve accuracy of voice-to-text model',
       assignee:'Alinea Bacaan',
       start_date:'11/29/2020',
       end_date:'12/12/2020',
       tags:'research'
    },
    {
        issue_id: 2,
        title:'Two-factor authentication to make private',
        assignee:'Cantik Adalah',
        start_date:'12/15/2020',
        end_date:'12/16/2020',
        tags:'design'
    },{
        issue_id: 3,
        title:'Create API to load user info from database',
        assignee:'Emilee Simchenko',
        start_date:'12/15/2020',
        end_date:'12/17/2020',
        tags:'backend'
    }],
    Cards:[
        {
            card_id:1,
            title:'backlog',
            issuesId: [1,2]
        },
        {
            card_id:2,
            title:'todo',
            issuesId: [2,3]
        },
        {
            card_id:3,
            title:'done',
            issuesId: [1,3]
        },
    ]
}