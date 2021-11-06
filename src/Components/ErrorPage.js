import { Typography, Paper } from "@material-ui/core";

function ErrorPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "60px",
        }}
      >
        <Paper elevation={3} style={{ padding: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h1" align="center">
              404
            </Typography>

            <Typography variant="h5" align="center">
              Page Not Found
            </Typography>
            <Typography variant="p" align="center" style={{ padding: "40px" }}>
              The link you clicked may be broken or the page may have been
              removed or renamed
            </Typography>
          </div>
        </Paper>
      </div>
    </>
  );
}
export default ErrorPage;
