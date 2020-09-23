import { StyleSheet } from "react-native";

const darkText = "#213751";
const borderRadius = 20;

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  sectionContainer: { marginTop: 25 },
  sectionHeader: {
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: darkText,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0,
    lineHeight: 18,
  },
  sectionAction: { color: "grey" },
  categoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  categoryImageContainer: {
    height: 80,
    width: 80,
    borderRadius: borderRadius,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  categoryImage: { height: 70, width: 70 },
  categoryName: { color: darkText, fontWeight: "500" },
  popularProductContainer: {
    marginEnd: 20,
    marginRight: 20,
    width: 180,
    borderRadius: borderRadius,
    padding: 8,
    marginVertical: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.13,
    shadowRadius: 4.65,
    elevation: 8,
  },
  favButton: {
    zIndex: 10000,
    position: "absolute",
    top: 10,
    right: 10,
  },
  popularProductImageContainer: {
    backgroundColor: "white",
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#81d4fa",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 4.13,
    shadowRadius: 6.65,
    elevation: 8,
  },
  popularProductImage: {
    height: 90,
    width: 90,
  },
  popularProductName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#263238",
  },
  popularProductDescription: {
    height: 28,
    color: "#4f5b62",
    lineHeight: 14,
  },
  popularProductPrice: {
    color: darkText,
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 30,
  },
  recommendedContainer: {
    marginEnd: 20,
    marginRight: 20,
    padding: 8,
    marginVertical: 5,
    width: 310,
    borderRadius: borderRadius,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.13,
    shadowRadius: 4.65,
    elevation: 8,
  },
  recommendedImage: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    marginEnd: 5,
    marginRight: 5,
  },
  recommendedInfoContainer: {
    width: 184,
  },
  recommendedBusiness: {
    fontSize: 13,
    color: "grey",
    marginBottom: 10,
  },
  recommendedName: {
    color: darkText,
    fontWeight: "600",
    lineHeight: 14,
  },
  recommendedDescription: {
    color: "grey",
    fontSize: 12.5,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  leftPadding: { paddingLeft: 20, paddingStart: 20 },
});
