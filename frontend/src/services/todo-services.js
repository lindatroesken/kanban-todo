const slugStatus = {
    todo: "OPEN",
    doing: "IN_PROGRESS",
    done: "DONE"
}

const statusTitle = {
    OPEN: 'Todo',
    IN_PROGRESS: 'Doing',
    DONE: 'Done'
}

export const slugToStatus = slug => slugStatus[slug]

export const statusToTitle = status => statusTitle[status]