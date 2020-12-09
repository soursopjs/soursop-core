class ButtonPage {
    constructor(page) {
        this.page = page;
    }

    async isLoadedModalClass() {
        const defined = this.page.evaluate(() => {
            // eslint-disable-next-line no-undef
            const x = soursopCore.Button;
            return typeof x === "function" && /^\s*class\s+/.test(x.toString());
        });
        return defined;
    }

    async clickButton() {
        await this.page.click("#button-n");
    }

    async isButtonClicked() {
        // eslint-disable-next-line no-undef
        const status = await this.page.evaluate(() => v);
        return status;
    }

    async enableButton() {
        // eslint-disable-next-line no-undef
        await this.page.evaluate(() => b.enable());
    }

    async disableButton() {
        // eslint-disable-next-line no-undef
        await this.page.evaluate(() => b.disable());
    }

    async isDisabled() {
        // eslint-disable-next-line no-undef
        const status = await this.page.evaluate(() => b.isDisabled());
        return status;
    }

    async changeParent() {
        // eslint-disable-next-line no-undef
        await this.page.evaluate(() => changeParent());
    }

    async wasChangedOfParent() {
        /* eslint-disable no-undef */
        const lengthOld = await this.page.evaluate(() => container.children.length);
        const lengthNew = await this.page.evaluate(() => container2.children.length);
        return lengthOld === 0 && lengthNew === 1;
    }
}

module.exports = ButtonPage;
