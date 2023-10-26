import { colors, font } from 'common/styles';    
    
    export const Container = styled.div`
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "${colors.normal.white}"
    `;
    
    export const text = styled.p`
        margin-bottom: 1.6rem;
    `;

    export const placeholder = styled.div`
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
        borderRadius: 30,
        width: 225,
        height: 191,
    `;
    
    export const uploadButton = styled.div`
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
        borderRadius: 30,
        width: 225,
        height: 191,
    `;

    export const textUpload = styled.div`
        fontFamily: "Spartan_500Medium",
        color: "${colors.normal.white}",
        fontSize: 20,
        marginVertical: 10
    `;

    export const textAudioOptions = styled.div`
        marginHorizontal: 10,
        fontFamily: "Spartan_500Medium",
        color: "${colors.soft.purple6}",
        fontSize: 20,
    `;

    export const containerAudioBttn = styled.div`
        alignItems: "center",
        flexDirection: "row",
    `;

    export const recordBttn = styled.div`
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#F4F4F4",
    height: 50,
    width: 245,
    borderRadius: 30,
    `;

    export const textAudioBttn = styled.div`
        marginHorizontal: 5,
        fontFamily: "Spartan_500Medium",
        fontSize: 20,
        color: "${colors.soft.purple6}",
    `;

    export const cardNameInput = styled.div`
    borderWidth: 1,
    borderRadius: 30,
    fontFamily: "Spartan_500Medium",
    fontSize: fontSize, // Responsive font size
    height: 66,
    width: "40%", // Adjust as needed
    borderColor: "#F4F4F4",
    backgroundColor: "#F4F4F4",
    `;
    
