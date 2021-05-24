import Blockly from 'blockly';

const iconMap = {
    Logic: 'ti ti-arrows-split',
    Boolean: 'ti ti-arrows-join',
    Loops: 'ti ti-repeat',
    Lists: 'ti ti-brackets',
    Variables: 'ti ti-variable',
    Browser: 'ti ti-browser',
    Page: 'ti ti-file-info',
    Assertion: 'ti ti-checks',
    Text: 'ti ti-forms',
};

class CustomToolboxCategory extends Blockly.ToolboxCategory {
    /**
     * Constructor for a custom category.
     * @override
     */
    constructor(categoryDef, toolbox, optParent) {
        super(categoryDef, toolbox, optParent);
    }

    /** @override */
    addColourBorder_(colour) {
        this.rowDiv_.style.backgroundColor = colour;
    }

    /** @override */
    setSelected(isSelected) {
        if (isSelected) {
            // Change the background color of the div to white.
            this.rowDiv_.style.backgroundColor = 'white';
            // Set the colour of the text to the colour of the category.
            this.labelDom_.style.color = this.colour_;
            this.iconDom_.style.color = this.colour_;
        } else {
            // Set the background back to the original colour.
            this.rowDiv_.style.backgroundColor = this.colour_;
            // Set the text back to white.
            this.labelDom_.style.color = 'white';
            this.iconDom_.style.color = null;
        }
        // This is used for accessibility purposes.
        Blockly.utils.aria.setState(
            /** @type {!Element} */ (this.htmlDiv_),
            Blockly.utils.aria.State.SELECTED,
            isSelected
        );
    }

    /** @override */
    createIconDom_() {
        const categoryName = this.getName();
        const categoryIcon = iconMap[categoryName];
        const span = document.createElement('span');
        if (categoryIcon) {
            span.className = `demo-row-icon ${categoryIcon}`;
        }
        return span;
    }

    /** @override */
    createLabelDom_(name) {
        const span = document.createElement('span');
        span.className = 'demo-row-label';
        span.textContent = name;
        return span;
    }

    /** @override */
    createRowContentsContainer_() {
        const div = document.createElement('div');
        div.className = 'demo-row-contents-container';
        return div;
    }

    /** @override */
    createRowContainer_() {
        const div = document.createElement('div');
        div.className = 'demo-row-container';
        return div;
    }
}

// Register custom toolbox category
Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomToolboxCategory,
    true
);
