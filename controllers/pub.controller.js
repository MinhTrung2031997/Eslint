module.exports = {
    getAllPub: async (req, res, next) => {
        await res.json({
            result: "Successfully",
            data: [{
                name: "trug",
                age: 18
            },
            {
                name: "trung",
                age: 19
            },
            {
                name: "Blackpink",
                age: 30
            }
            ],
            message: "query not successfully"
        });
    },
    getAll: async (req, res, next) => {
        await res.json({
            result: "Successfully",
            data: [{
                name: "trug",
                age: 18
            },
            {
                name: "trung",
                age: 19
            },
            ],
            message: "query not successfully"
        });
    }
};
