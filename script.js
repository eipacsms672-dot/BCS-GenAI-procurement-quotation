function updateQuotationPreview() {
  const form = document.getElementById('quotationForm');
  const name = form.name.value;
  const email = form.email.value;
  const company = form.company.value;
  const attendees = parseInt(form.attendees.value) || 0;
  const duration = parseInt(form.duration.value) || 0;
  const location = form.location.value.toLowerCase();

  const selectedServices = [...form.querySelectorAll('input[name="services"]:checked')];
  let total = 0;
  let serviceList = '';

  selectedServices.forEach(service => {
    const price = parseFloat(service.dataset.price);
    total += price;
    serviceList += `<li>${service.value} - $${price}</li>`;
  });

  // Example business logic
  if (attendees > 50) total *= 0.9; // 10% discount
  if (location.includes("remote")) total += 100; // remote surcharge
  if (duration > 3) total += duration * 20; // extended duration cost

  document.getElementById('quoteOutput').innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Selected Services:</strong></p>
    <ul>${serviceList}</ul>
    <p><strong>Total Price:</strong> $${total.toFixed(2)}</p>
  `;
}
