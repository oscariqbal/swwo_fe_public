export const WhatsApp = () => {
    const phoneNumber = "6281252380578";
    const message = "Halo, saya tertarik menggunakan jasa Satria Wijaya Wedding Organizer!";

    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return link;
};

export const GoogleMaps = () => {
    const link = `https://www.google.com/maps/place/Satria+Wijaya+Wedding+Organizer/@-7.268689,110.086086,17z/data=!4m6!3m5!1s0x2e70779aa2abbc83:0x48ccf85e98ab26ed!8m2!3d-7.2686888!4d110.0860859!16s%2Fg%2F11sbgvj26t?hl=id&entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D`;
    return link;
};