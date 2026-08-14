import { parsePrompt, generateHTML } from './generator.js';

// DOM element selections
const promptInput = document.getElementById('promptInput');
const generateBtn = document.getElementById('generateBtn');
const clearPromptBtn = document.getElementById('clearPromptBtn');
const themeSelector = document.getElementById('themeSelector');
const industrySelector = document.getElementById('industrySelector');
const brandNameInput = document.getElementById('brandNameInput');
const taglineInput = document.getElementById('taglineInput');
const copyCodeBtn = document.getElementById('copyCodeBtn');
const downloadBtn = document.getElementById('downloadBtn');
const copyShareBtn = document.getElementById('copyShareBtn');
const previewIframe = document.getElementById('previewIframe');
const iframeWrapper = document.getElementById('iframeWrapper');
const btnIcon = document.getElementById('btnIcon');
const btnText = document.getElementById('btnText');

// Application global states
let currentSpecs = {
  industry: 'restaurant',
  colors: 'green',
  name: 'Golden Grain Bistro',
  customTagline: 'An elegant farm-to-table organic bistro in Chicago'
};
let currentGeneratedHTML = '';

// Setup event listeners for Preset Chips
document.querySelectorAll('.preset-chip').forEach(button => {
  button.addEventListener('click', (e) => {
    const presetText = e.currentTarget.getAttribute('data-preset');
    promptInput.value = presetText;
    handleGeneration();
  });
});

// Setup function for Viewport Switchers
function changeViewport(device) {
  const btnDesktop = document.getElementById('viewportDesktopBtn');
  const btnTablet = document.getElementById('viewportTabletBtn');
  const btnMobile = document.getElementById('viewportMobileBtn');

  // Reset styles
  [btnDesktop, btnTablet, btnMobile].forEach(btn => {
    btn.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-800 transition-all flex items-center gap-1.5';
  });

  if (device === 'desktop') {
    btnDesktop.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all bg-emerald-600 text-white flex items-center gap-1.5 shadow-sm';
    iframeWrapper.style.maxWidth = '100%';
  } else if (device === 'tablet') {
    btnTablet.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all bg-emerald-600 text-white flex items-center gap-1.5 shadow-sm';
    iframeWrapper.style.maxWidth = '768px';
  } else if (device === 'mobile') {
    btnMobile.className = 'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all bg-emerald-600 text-white flex items-center gap-1.5 shadow-sm';
    iframeWrapper.style.maxWidth = '410px';
  }
}

// Bind viewport switchers
document.querySelectorAll('.viewport-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const device = e.currentTarget.getAttribute('data-device');
    changeViewport(device);
  });
});

/**
 * Initiates the parsing and rendering process
 */
function handleGeneration() {
  const prompt = promptInput.value.trim();
  if (!prompt) {
    showToast('Please type a descriptive prompt first.', 'error');
    return;
  }

  // Set loading state on button
  btnIcon.textContent = '⚙';
  btnIcon.classList.add('animate-spin');
  btnText.textContent = 'Synthesizing Site...';
  generateBtn.disabled = true;

  setTimeout(() => {
    try {
      // 1. Run Parser logic
      const specs = parsePrompt(prompt);

      // 2. Sync parsed values to current state
      currentSpecs = {
        industry: specs.industry,
        colors: specs.colors,
        name: specs.name,
        customTagline: specs.customTagline
      };

      // 3. Sync UI inputs with extracted metadata
      industrySelector.value = currentSpecs.industry;
      themeSelector.value = currentSpecs.colors;
      brandNameInput.value = currentSpecs.name || '';
      taglineInput.value = currentSpecs.customTagline || '';

      // 4. Render HTML string
      renderPreview();
      showToast('Website synthesized and rendered successfully!', 'success');
    } catch (e) {
      console.error(e);
      showToast('Generation encountered an issue.', 'error');
    } finally {
      // Restore active state
      btnIcon.textContent = '✨';
      btnIcon.classList.remove('animate-spin');
      btnText.textContent = 'Generate Site';
      generateBtn.disabled = false;
    }
  }, 750);
}

/**
 * Renders HTML inside iframe preview
 */
function renderPreview() {
  currentGeneratedHTML = generateHTML(currentSpecs);

  // Inject generated website into iframe sandbox cleanly
  const doc = previewIframe.contentDocument || previewIframe.contentWindow.document;
  doc.open();
  doc.write(currentGeneratedHTML);
  doc.close();
}

/**
 * Handle manual control overrides
 */
function handleManualAdjustments() {
  currentSpecs.industry = industrySelector.value;
  currentSpecs.colors = themeSelector.value;
  currentSpecs.name = brandNameInput.value.trim() || null;
  currentSpecs.customTagline = taglineInput.value.trim() || null;

  renderPreview();
  showToast('Applied manual customizer updates', 'success');
}

/**
 * Show animated temporary alert Toast
 */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMessage');
  msgEl.textContent = message;

  if (type === 'error') {
    toast.className = 'fixed bottom-6 right-6 z-50 bg-rose-600 text-white font-bold py-3 px-6 rounded-2xl shadow-xl border border-rose-400/20 flex items-center gap-2 text-sm transition-all duration-300';
  } else {
    toast.className = 'fixed bottom-6 right-6 z-50 bg-emerald-600 text-white font-bold py-3 px-6 rounded-2xl shadow-xl border border-emerald-400/20 flex items-center gap-2 text-sm transition-all duration-300';
  }

  // Fade in
  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');

  setTimeout(() => {
    // Fade out
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
  }, 2500);
}

// Detect if running in fullscreen preview mode via URL parameters
function setupFromURLParams() {
  const params = new URLSearchParams(window.location.search);
  const promptParam = params.get('prompt');
  const previewParam = params.get('preview');
  const industryParam = params.get('industry');
  const colorParam = params.get('colors');
  const nameParam = params.get('name');
  const taglineParam = params.get('tagline');

  if (previewParam === 'true' && promptParam) {
    // Fullscreen sharing/preview mode
    // Hide UI elements
    document.getElementById('mainHeader').classList.add('hidden');
    document.getElementById('editorPanel').classList.add('hidden');
    document.getElementById('viewportHeader').classList.add('hidden');

    // Stretch container and remove frame wrappers / borders / shadows / padding
    const iframeContainer = document.getElementById('iframeContainer');
    iframeContainer.className = 'w-full h-full p-0 overflow-hidden';

    const iframeWrapper = document.getElementById('iframeWrapper');
    iframeWrapper.className = 'w-full h-full border-0 rounded-none shadow-none';
    iframeWrapper.style.maxWidth = '100%';

    // Extract specifications
    const specs = parsePrompt(promptParam);
    if (industryParam) specs.industry = industryParam;
    if (colorParam) specs.colors = colorParam;
    if (nameParam) specs.name = nameParam;
    if (taglineParam) specs.customTagline = taglineParam;

    currentSpecs = specs;
    renderPreview();
    return true;
  } else if (promptParam) {
    // Normal builder mode but preloaded with prompt parameters
    promptInput.value = promptParam;
    const specs = parsePrompt(promptParam);
    if (industryParam) specs.industry = industryParam;
    if (colorParam) specs.colors = colorParam;
    if (nameParam) specs.name = nameParam;
    if (taglineParam) specs.customTagline = taglineParam;

    currentSpecs = specs;

    // Sync UI elements
    industrySelector.value = specs.industry;
    themeSelector.value = specs.colors;
    brandNameInput.value = specs.name || '';
    taglineInput.value = specs.customTagline || '';

    renderPreview();
    return true;
  }
  return false;
}

// Initialise page configuration
const loadedFromUrl = setupFromURLParams();
if (!loadedFromUrl) {
  // Set initial default page values to green and white bistro theme
  promptInput.value = "An elegant farm-to-table organic bistro called 'Golden Grain Bistro' with a gorgeous green and white layout";
  currentSpecs = {
    industry: 'restaurant',
    colors: 'green',
    name: 'Golden Grain Bistro',
    customTagline: 'An elegant farm-to-table organic bistro in Chicago'
  };
  renderPreview();
}

// Event bindings
generateBtn.addEventListener('click', handleGeneration);
clearPromptBtn.addEventListener('click', () => {
  promptInput.value = '';
  promptInput.focus();
});

// Bind manual adjustments dropdowns/inputs
themeSelector.addEventListener('change', handleManualAdjustments);
industrySelector.addEventListener('change', handleManualAdjustments);
brandNameInput.addEventListener('input', handleManualAdjustments);
taglineInput.addEventListener('input', handleManualAdjustments);

// Export controls
copyCodeBtn.addEventListener('click', () => {
  if (!currentGeneratedHTML) {
    showToast('Generate a website first.', 'error');
    return;
  }
  navigator.clipboard.writeText(currentGeneratedHTML)
    .then(() => showToast('Generated HTML copied to clipboard!', 'success'))
    .catch(() => showToast('Failed to copy to clipboard', 'error'));
});

copyShareBtn.addEventListener('click', () => {
  const currentPrompt = promptInput.value.trim();
  if (!currentPrompt) {
    showToast('Generate a website first to share it.', 'error');
    return;
  }

  // Create query parameters with specifications
  const params = new URLSearchParams();
  params.set('prompt', currentPrompt);
  params.set('preview', 'true');
  if (currentSpecs.industry) params.set('industry', currentSpecs.industry);
  if (currentSpecs.colors) params.set('colors', currentSpecs.colors);
  if (currentSpecs.name) params.set('name', currentSpecs.name);
  if (currentSpecs.customTagline) params.set('tagline', currentSpecs.customTagline);

  // Construct absolute URL
  const baseUrl = window.location.origin + window.location.pathname;
  const shareUrl = `${baseUrl}?${params.toString()}`;

  navigator.clipboard.writeText(shareUrl)
    .then(() => showToast('Custom Share Link copied to clipboard!', 'success'))
    .catch(() => showToast('Failed to copy link to clipboard', 'error'));
});

downloadBtn.addEventListener('click', () => {
  if (!currentGeneratedHTML) {
    showToast('Generate a website first.', 'error');
    return;
  }

  // Download standard pure HTML file direct to local downloads folder
  const blob = new Blob([currentGeneratedHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const filename = (currentSpecs.name || 'instasite').toLowerCase().replace(/\s+/g, '-') + '.html';

  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`Successfully downloaded: ${filename}`, 'success');
});
