export default function Footer() {
  return (
    <footer className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mt-6 text-center text-gray-500 text-sm rounded-lg p-6">
          <div className="mb-4">
            <p>This exploration was created to promote critical thinking about the Philippine history and society, examining how they align with the principles and ideals taught by José Rizal.</p>
            <p className="mt-1">All Rizal quotes are from public domain works. Modern examples are cited from credible news sources.</p>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-500">© {new Date().getFullYear()} All content for academic purposes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
