import { colors, font } from "common/styles";

const { width } = Dimensions.get("window");
const cardMargin = width * 0.005; // Card margin based on screen size

export const Container = styled.div`
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "${colors.normal.white}"
    `;

export const cardButton = styled.div`
        backgroundColor: "${colors.normal.white}"
        borderRadius: 30,
        marginTop: 20,
        marginHorizontal: "${cardMargin}",
    `;
// Width and height set dynamically

export const cardText = styled.div`
        marginTop: 5,
        fontFamily: "Mitr_500Medium",
        fontSize: width * 0.02, // Font size based on screen size
        color: "#000000",
    `;
