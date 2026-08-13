from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to the single line website builder app
    page.goto("http://localhost:3000")
    page.wait_for_timeout(1000)

    # Fill in a custom prompt
    prompt = "An amazing farm-to-table organic restaurant called 'Golden Grain Bistro' with green colors"
    page.fill("#promptInput", prompt)
    page.wait_for_timeout(1000)

    # Click the generate button
    page.click("#generateBtn")

    # Wait for generator to complete synthesis (timed delay in app.js is 750ms)
    page.wait_for_timeout(1500)

    # Verify that the generated brand details were synced to the manual adjustments panel
    # E.g., Brand Name should now be 'Golden Grain Bistro'
    brand_name_val = page.locator("#brandNameInput").input_value()
    print("Parsed Brand Name:", brand_name_val)

    # Change viewport to tablet to test responsiveness controls
    page.click("#viewportTabletBtn")
    page.wait_for_timeout(1000)

    # Take screenshot of the complete dashboard with responsive live preview
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
