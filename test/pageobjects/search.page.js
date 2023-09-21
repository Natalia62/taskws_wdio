class SearchPage{
    get searchinput() { return $('//span[@class="flex-1"]') }
    get searchtext() { return $('#query-builder-test') }
    get result_search() { return $('//a[@class="Link__StyledLink-sc-14289xe-0 bJBoUI"]') }

    async SearchClick() {
        await this.searchinput.click()
    }

    async SearchInput() {
        let search_text = "act"
        await this.searchtext.setValue(search_text)
    }

    async ExpectedResult() {
        let search_text = "act"
        await expect(this.result_search).toHaveHrefContaining(search_text)
    }

}

export default new SearchPage()