const axios = require('axios');

const socialMediaAPI = {
    fetchAccountData: async (platform) => {
        // Replace with actual API endpoint and parameters
        const response = await axios.get(`https://api.${platform}.com/accounts`);
        return response.data;
    },

    countPosts: (accounts) => {
        return accounts.map(account => ({
            username: account.username,
            postCount: account.posts.length
        }));
    },

    getTopAccounts: async (platform) => {
        const accounts = await socialMediaAPI.fetchAccountData(platform);
        const accountsWithPostCounts = socialMediaAPI.countPosts(accounts);
        accountsWithPostCounts.sort((a, b) => b.postCount - a.postCount);
        return accountsWithPostCounts.slice(0, 5);
    }
};

module.exports = socialMediaAPI;