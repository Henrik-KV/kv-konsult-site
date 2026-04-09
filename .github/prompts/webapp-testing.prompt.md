---
description: Test and verify web application functionality using Playwright browser automation. Use when testing UI, verifying frontend functionality, debugging visual behavior, or capturing screenshots.
---

# Web Application Testing Skill

Test local web applications using Playwright MCP tools for browser automation.

## Approach

### Decision Tree
```
User task → Is the server already running?
    ├─ No → Start with `npm run dev` first, then test
    └─ Yes → Reconnaissance-then-action:
        1. Navigate and wait for page load
        2. Take snapshot or inspect DOM
        3. Identify selectors from rendered state
        4. Execute actions with discovered selectors
```

## Using Playwright MCP Tools

The Playwright MCP server provides browser automation directly in VS Code Copilot.

### Common Workflows

**Navigate to a page:**
- Use `browser_navigate` to go to a URL
- Wait for page to fully load

**Inspect the page:**
- Use `browser_snapshot` to get accessibility tree
- Identify elements by their role, name, or text

**Interact with elements:**
- Use `browser_click` to click buttons/links
- Use `browser_fill_form` to fill input fields
- Use `browser_type` to type text
- Use `browser_select_option` for dropdowns

**Take screenshots:**
- Use `browser_take_screenshot` for visual verification

**Check console:**
- Use `browser_console_messages` for JavaScript errors

### Testing Patterns

1. **Smoke Test**: Navigate → Screenshot → Verify page loads
2. **Form Test**: Navigate → Fill form → Submit → Verify result
3. **Navigation Test**: Navigate → Click links → Verify correct pages load
4. **Responsive Test**: Resize browser → Screenshot → Verify layout
5. **Error Test**: Trigger errors → Check console → Verify error handling

## Best Practices
- Always wait for page to fully load before interacting
- Use descriptive selectors: text=, role=, CSS selectors, or IDs
- Take screenshots to verify visual state
- Check console for JavaScript errors
- Test on different viewport sizes for responsive design
- Close browser when done
