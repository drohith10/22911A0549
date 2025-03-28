class AnalyticsController {
    constructor(socialMediaService) {
        this.socialMediaService = socialMediaService;
    }

    async getTopAccounts(req, res) {
        try {
            const accounts = await this.socialMediaService.fetchAccounts();
            const sortedAccounts = accounts.sort((a, b) => b.postCount - a.postCount);
            const topAccounts = sortedAccounts.slice(0, 5);
            res.status(200).json(topAccounts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching top accounts', error: error.message });
        }
    }
}

module.exports = AnalyticsController;