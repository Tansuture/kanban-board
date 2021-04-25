let state = {
    columns: [
         {  id:0,
            name: 'Backlog',
            cards: [
                {
                    id: 1,
                    name: 'Login page – performance issues',
                    time:   new Date().toLocaleString(),
                    desc: 'task description here backlog'
                },
                {
                    id: 2,
                    name: 'Sprint bugfix',
                    time:   new Date().toLocaleString(),
                    desc: 'task description here backlog'
                }
            
            
            ]
        },
        {  id:1,
            name: 'Ready',
            cards: [
                {
                    id: 1,
                    name: 'Shop page – performance issues',
                    time:   new Date().toLocaleString(),
                    desc: 'task description here ready'

                },
                {
                    id: 2,
                    name: 'New title',
                    time:   new Date().toLocaleString(),
                    desc: 'task description here ready'

                }
            ]
        },
        { id:2,
            name: 'In Progress',
            cards: [
                {
                    id: 1,
                    name: 'User page – performance issues',
                    time:   new Date().toLocaleString(),
                    desc: 'task description here in progress'
                }
            ]
        },
        {  id:3,
            name: 'Finished',
            cards: [
                {
                    id: 1,
                    name: 'Main page – performance issues',
                    time:   new Date().toLocaleString(),
                    desc: 'task description here finished'
                }
            ]
        }
    
]
}

export default state