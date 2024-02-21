describe("Tests for planYourTrip object", function() {
    describe("Choosing Destination", function() {
        it("Should return appropriate message for Ski Resort in Winter", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("Should return appropriate message for Ski Resort in non-Winter season", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });

        it("Should throw error for invalid year", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
        });

        it("Should throw error for invalid destination", function() {
            expect(() => planYourTrip.choosingDestination("Beach", "Summer", 2024)).to.throw("This destination is not what you are looking for.");
        });
    });

    describe("Explore Options", function() {
        it("Should remove activity at specified index", function() {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1)).to.equal("Skiing, Winter Hiking");
        });

        it("Should throw error for invalid activities", function() {
            expect(() => planYourTrip.exploreOptions("Skiing", 0)).to.throw("Invalid Information!");
        });

        it("Should throw error for invalid activity index", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], -1)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 3)).to.throw("Invalid Information!");
        });
    });

    describe("Estimate Expenses", function() {
        it("Should return budget-friendly message", function() {
            expect(planYourTrip.estimateExpenses(100, 4.5)).to.equal("The trip is budget-friendly, estimated cost is $450.00.");
        });

        it("Should return plan accordingly message", function() {
            expect(planYourTrip.estimateExpenses(1000, 6)).to.equal("The estimated cost for the trip is $6000.00, plan accordingly.");
        });

        it("Should throw error for invalid distance or fuel cost", function() {
            expect(() => planYourTrip.estimateExpenses(-100, 4.5)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(100, -4.5)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses("100", 4.5)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(100, "4.5")).to.throw("Invalid Information!");
        });
    });
});