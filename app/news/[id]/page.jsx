import Sidebar from "./../../_components/Layout/Sidebar";
import Navbar from "../../_components/Layout/Navbar";

export default function News() {
    return (
        <main className="main">
            <Navbar />
            <div className="main__container">
                <Sidebar />
                <div className="content">
                    <div class="full-width-section">
                        <img src="/image/arenaev_0001.jpg" alt="Full Width Banner" class="full-width-image" />
                        <p class="full-width-text">
                            This is a description or paragraph below the full-width image. You can add any text here to provide context or details about the image.
                        </p>
                    </div>
                    <div class="full-width-section">
                        <img src="/image/arenaev_0002.jpg" alt="Full Width Banner" class="full-width-image" />
                        <p class="full-width-text">
                            Proin malesuada, nisi a feugiat gravida, purus lectus laoreet tortor, nec tincidunt nulla odio at justo.
                            Cras imperdiet, lacus vel faucibus vestibulum, augue nunc vulputate tellus, sit amet tincidunt magna lorem a neque.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Curabitur ultricies risus ac augue euismod, ut cursus libero fermentum. Aenean nec justo in nunc consectetur
                            malesuada vel sit amet magna. Sed sagittis odio sit amet diam convallis, a dapibus turpis luctus.
                            Phasellus eget nisi non magna faucibus aliquet.
                        </p>
                    </div>
                    <div class="two-images">
                        <img src="/image/arenaev_0001.jpg" alt="Image 1" />
                        <img src="/image/arenaev_0002.jpg" alt="Image 2" />
                    </div>

                    <p class="full-width-text">
                        This is another paragraph following the two side-by-side images. Add your content here.
                    </p>
                    <div class="full-width-section">
                        <img src="/image/arenaev_0003.jpg" alt="Full Width Banner" class="full-width-image" />
                        <p class="full-width-text">
                            This is a description or paragraph below the full-width image. You can add any text here to provide context or details about the image.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
