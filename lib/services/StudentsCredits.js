class ExplorerCredits {

    static explorerCreditsNeeded (explorer){

        if (explorer.credits > 500) {
        return explorer
        }
        else if (explorer.credits <= 500){
            return  "insufficient credits"
    }
}}

module.exports = ExplorerCredits