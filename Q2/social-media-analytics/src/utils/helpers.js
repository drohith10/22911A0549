const sortAccountsByPosts = (accounts) => {
    return accounts.sort((a, b) => b.postCount - a.postCount);
};

const filterTopAccounts = (accounts, limit = 5) => {
    return accounts.slice(0, limit);
};

module.exports = {
    sortAccountsByPosts,
    filterTopAccounts
};